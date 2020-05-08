import { html } from "htm/preact";
import ButtonAddCart from "../components/ButtonAddCart";
import ButtonAddFav from "../components/ButtonAddFav";
import ButtonShowDetails from "../components/ButtonDetails";

export default class BookCard {
  constructor(book) {
    console.log(book);
    this.book = book;
    this.title = book.volumeInfo.title;
    this.imgUrl = book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.thumbnail
      : "";
    this.price = book.saleInfo.retailPrice
      ? book.saleInfo.retailPrice.amount
      : 0;
  }

  render() {
    const addCartButton = new ButtonAddCart();
    const addFav = new ButtonAddFav();
    const showDetails = new ButtonShowDetails();

    return html`
      <article class="book-card">
        <img src="${this.imgUrl}" />

        <div class="info">
          <p className="book-title">${this.title}</p>
          <p className="book-price">${this.price}</p>
        </div>

        <div className="actions">
          ${addCartButton.render()} ${addFav.render()} ${showDetails.render()}
        </div>
      </article>
    `;
  }
}
