import { html } from "htm/preact";
import Favorites from "../services/favorites";

export default class ButtonAddFav {
  constructor(book) {
    this.book = book;
    this.title = book.volumeInfo.title;
  }

  addToFav() {
    const favService = new Favorites();
    favService.addItem(this.book);
    window.alert(`"${this.title}" foi adicionado aos favoritos!`);
  }

  render() {
    return html`
      <button
        class="btn-fav"
        onclick="${this.addToFav.bind(this)}"
        title="Adicionar aos favoritos"
      >
        <i class="fab fa-gratipay"></i>
      </button>
    `;
  }
}
