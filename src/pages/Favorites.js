import { html } from "htm/preact";
import FavService from "../services/favorites";
import BookResults from "../components/BookResults";

export default class Favorites {
  render() {
    const favService = new FavService();
    const items = favService.getItems();

    return html`
      <h1>Meus favoritos</h1>
      ${items.map((bookItem) => {
        const bookResults = new BookResults();
        return bookResults.render(bookItem, true, false, true, "favorite");
      })}
    `;
  }
}
