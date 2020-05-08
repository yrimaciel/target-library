import { html } from "htm/preact";
import Header from "../components/Header";
import Menu from "../components/Menu";
import CardList from "../components/CardList";

export default class Home {
  async render() {
    const headerComponent = new Header();
    const menuComponent = new Menu();
    const cardListComponent = new CardList();

    return html`
      <div>
        ${headerComponent.render()}

        <main>
          ${await menuComponent.render()}

          <section class="content">
            ${await cardListComponent.render()}
          </section>
        </main>
      </div>
    `;
  }
}
