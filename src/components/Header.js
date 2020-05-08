import { html } from "htm/preact";
import Search from "./Search";

export default class Header {
  render() {
    const searchInput = new Search();
    return html`
      <header>
        <h1>yulib</h1>

        ${searchInput.render()}

        <a href="#">Favoritos</a>
      </header>
    `;
  }
}
