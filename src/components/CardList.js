import { html } from "htm/preact";
import BookCard from "./BookCard";
import GoogleBooks from "../services/googleBooks";

export default class CardList {
  async fetchBooks() {
    const api = new GoogleBooks();

    return api.getBooks();
  }

  async render() {
    const books = await this.fetchBooks();

    return html`
      <section class="cards-list">
        <h1>Lançamentos</h1>

        <div className="books">
          ${books.items.map((book) => {
            const bookCardComponent = new BookCard(book);
            return bookCardComponent.render();
          })}
        </div>
      </section>
    `;
  }
}
