import { html } from "htm/preact";
import GoogleBooks from "../services/googleBooks";

export default class ButtonDetails {
  redirectToDetails() {
    const api = new GoogleBooks();
    api.getBookID(this.bookId);
    global.router.navigateTo(`details/${this.bookId}`);
  }

  render(bookId) {
    console.log("book", bookId);
    return html`
      <button
        class="btn-details"
        title="Ver detalhes"
        onClick="${this.redirectToDetails}"
      >
        <i class="fas fa-info-circle"></i>
      </button>
    `;
  }
}
