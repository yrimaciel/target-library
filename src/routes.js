import Router from "vanilla-router";
import { render, html } from "htm/preact";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";

const router = new Router({
  mode: "hash",
});

router.add("", renderHome);

router.add(/search\/([(\w+)]+)/i, renderSearch);

router.add("details/{bookID}", renderDetails);

router.add("favorites", renderFavorites);

router.add("cart", renderCheckout);

if (window.location.href.match(/#$/g)) {
  window.location.href = window.location.href.replace("#", "");
}

router.addUriListener();

router.navigateTo("#");

global.router = router;

async function renderMain(contentHtml) {
  const headerComponent = new Header();
  const menuComponent = new Menu();

  const finalHtml = html`
    <div>
      ${headerComponent.render()}

      <main>
        ${await menuComponent.render()}

        <section class="content">
          ${contentHtml}
        </section>
      </main>
    </div>
  `;

  render(finalHtml, document.querySelector("#app"));
}

async function renderHome() {
  const home = new Home();
  renderMain(await home.render());
}

async function renderSearch(query) {
  const search = new SearchResult();
  renderMain(await search.render(query));
}

async function renderDetails(bookId) {
  const details = new Details();
  renderMain(await details.render(bookId));
}

async function renderFavorites() {
  const favorites = new Favorites();
  renderMain(await favorites.render());
}

async function renderCheckout() {
  const checkout = new Checkout();
  renderMain(await checkout.render());
}
