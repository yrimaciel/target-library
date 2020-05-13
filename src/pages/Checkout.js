import { html } from "htm/preact";
import Cart from "../services/cart";
import BookResults from "../components/BookResults";

export default class Checkout {
  render() {
    const cartService = new Cart();

    const items = cartService.getItems();

    return html`
      <h1>Meu carrinho</h1>
      ${items.map((bookItem) => {
        const bookResults = new BookResults();
        return bookResults.render(bookItem, false, true, false, "cart");
      })}
    `;
  }
}
