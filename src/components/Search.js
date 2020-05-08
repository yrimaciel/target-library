import { html } from "htm/preact";
import GoogleBooks from "../services/googleBooks";

export default class Search {
  async doSearch(event) {
    const api = new GoogleBooks();

    if (event.keyCode === 13) {
      const results = await api.searchBooks(event.target.value);
      console.log(results);
    }
  }

  render() {
    return html`
      <input
        type="search"
        placeholder="Nome do livro"
        onkeyup="${this.doSearch}"
      />
    `;
  }
}
