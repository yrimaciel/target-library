import { html } from "htm/preact";
import GoogleBooks from "../services/googleBooks";

export default class ButtonDetails {
  constructor(bookId) {
    this.bookId = bookId;
  }

  redirectToDetails() {
    global.router.navigateTo(`details/${this.bookId}`);
  }

  render() {
    return html`
      <button
        class="btn-details"
        title="Ver detalhes"
        onClick="${this.redirectToDetails.bind(this)}"
      >
        <i class="fas fa-info-circle"></i>
      </button>
    `;
  }
}
