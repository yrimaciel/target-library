import { html } from "htm/preact";
import ButtonAddCart from "./ButtonAddCart";
import ButtonDetails from "./ButtonDetails";
import ButtonAddFav from "./ButtonAddFav";
import ButtonRemove from "./ButtonRemove";

export default class BookResults {
  render(
    book,
    showCartButton = true,
    showFavButton = true,
    showDescription = true,
    removeType = ""
  ) {
    const buttonCart = new ButtonAddCart(book);
    const buttonDetails = new ButtonDetails(book.id);
    const buttonFav = new ButtonAddFav(book);
    const buttonRemove = new ButtonRemove(book, removeType);

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
          <p class="book-title">
            ${book.volumeInfo ? book.volumeInfo.title : null}
          </p>
          ${showDescription &&
          html`<p>${book.volumeInfo ? book.volumeInfo.subtitle : null}</p>`}
          <p class="price">
            R$
            ${book.saleInfo.retailPrice
              ? book.saleInfo.retailPrice.amount
              : "19.90"}
          </p>
        </div>

        <div class="actions">
          ${showCartButton && buttonCart.render(book)} ${buttonDetails.render()}
          ${showFavButton && buttonFav.render(book)}
          ${removeType !== null && buttonRemove.render()}
        </div>
      </article>
    `;
  }
}
