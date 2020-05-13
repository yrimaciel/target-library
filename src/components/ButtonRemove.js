import { html } from "htm/preact";
import Cart from "../services/cart";
import Favorites from "../services/favorites";

export default class ButtonRemove {
  constructor(book, removeType) {
    this.book = book;
    this.removeType = removeType;
    this.title = book.volumeInfo.title;
  }

  remove() {
    switch (this.removeType) {
      case "cart":
        const cartService = new Cart();
        cartService.removeItem(this.book);
      case "favorite":
        const favService = new Favorites();
        favService.removeItem(this.book);
      default:
        console.error("error");
    }

    window.alert(
      `O livro "${this.title}" foi removido ${
        this.removeType === "cart" ? "do carrinho" : "dos favoritos"
      }!`
    );
  }

  render() {
    return html`
      <button title="Remover" onclick="${this.remove.bind(this)}">
        <i class="fas fa-trash-alt"></i>
      </button>
    `;
  }
}
