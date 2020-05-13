import { html } from "htm/preact";
import BookResults from "../components/BookResults";
import GoogleBooks from "../services/googleBooks";

export default class SearchResult {
  async render(searchValue) {
    const result = searchValue.split("+").join(" ").toUpperCase();

    const api = new GoogleBooks();

    const results = await api.searchBooks(searchValue);

    return html`
      <section class="search-results">
        <h1>Resultado da pesquisa: ${result}</h1>
        ${results.items.map((book) => {
          const bookResults = new BookResults();
          return bookResults.render(book, true, true, true, null);
        })}
      </section>
    `;
  }
}
