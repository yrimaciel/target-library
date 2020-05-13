import { html } from "htm/preact";
import GoogleBooks from "../services/googleBooks";
import ButtonAddCart from "../components/ButtonAddCart";
import ButtonAddFav from "../components/ButtonAddFav";

export default class Details {
  async fetchDetails(bookId) {
    const api = new GoogleBooks();
    return api.getBookID(bookId);
  }

  async render(bookId) {
    const book = await this.fetchDetails(bookId);

    const buttonCart = new ButtonAddCart(book);
    const buttonFav = new ButtonAddFav(book);

    console.log(book.volumeInfo.averageRating);

    return html`
      <article class="book-details">
        <div class="image">
          <img src="${book.volumeInfo.imageLinks.thumbnail}" alt="" />

          <div className="actions">
            ${buttonCart.render()} ${buttonFav.render()}
          </div>
          ${book.saleInfo.retailPrice &&
          html`<p class="price">R$ ${book.saleInfo.retailPrice.amount}</p>`}
        </div>

        <div class="book-content">
          <div class="top">
            <div class="info">
              <h1>
                ${book.volumeInfo.title} - ${book.volumeInfo.authors[0]}
                ${book.volumeInfo.averageRating &&
                html`<p>
                  <i class="fas fa-star"></i> ${book.volumeInfo.averageRating}
                </p>`}
              </h1>
              <p>${book.volumeInfo.description}</p>
            </div>
            <div class="extra">
              ${book.volumeInfo.publishedDate &&
              html`<p>Data de publicação: ${book.volumeInfo.publishedDate}</p>`}
              ${book.volumeInfo.pageCount &&
              html`<p>Total de páginas: ${book.volumeInfo.pageCount}</p>`}
            </div>
          </div>
        </div>
      </article>
    `;
  }
}
