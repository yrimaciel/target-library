import { html } from "htm/preact";
import ButtonAddCart from "./ButtonAddCart";
import ButtonDetails from "./ButtonDetails";
import ButtonAddFav from "./ButtonAddFav";

export default class BookResults {
  render(book) {
    const buttonCart = new ButtonAddCart();
    const buttonDetails = new ButtonDetails();
    const buttonFav = new ButtonAddFav();

    return html`
      <article className="book-results">
        <div class="image">
          <img
            src="${book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.smallThumbnail
              : null}"
          />
        </div>

        <div class="info">
          <p class="book-title">${book.volumeInfo.title}</p>
          <p>${book.volumeInfo.description}</p>
          <p class="price">
            R$
            ${book.saleInfo.retailPrice
              ? book.saleInfo.retailPrice.amount
              : "19.90"}
          </p>
        </div>

        <div class="actions">
          ${buttonCart.render()} ${buttonDetails.render()} ${buttonFav.render()}
        </div>
      </article>
    `;
  }
}
