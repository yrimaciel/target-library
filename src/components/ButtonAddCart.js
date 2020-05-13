import { html } from "htm/preact";
import Cart from "../services/cart";

export default class ButtonAddCart {
  constructor(book) {
    this.book = book;
    this.title = book.volumeInfo.title;
  }

  addToCart() {
    const cartService = new Cart();
    cartService.addItem(this.book);
    window.alert(`"${this.title}" foi adicionado ao carrinho!`);
  }

  render() {
    return html`
      <button
        class="btn-cart"
        onclick="${this.addToCart.bind(this)}"
        title="Adicionar ao carrinho"
      >
        <i class="fas fa-shopping-cart"></i>
      </button>
    `;
  }
}
