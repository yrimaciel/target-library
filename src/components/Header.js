import { html } from "htm/preact";
import Search from "./Search";

export default class Header {
  render() {
    const searchInput = new Search();
    return html`
      <header>
        <h1>
          <a href="#"><i class="fas fa-book"></i> TargetLib</a>
        </h1>

        ${searchInput.render()}

        <a href="#/favorites" title="Ver meus favoritos"
          ><i class="fas fa-heart"></i
        ></a>

        <a href="#/cart" title="Meu carrinho"
          ><i class="fas fa-shopping-cart"></i
        ></a>
      </header>
    `;
  }
}
