import { html } from "htm/preact";
import Search from "./Search";

export default class Header {
  render() {
    const searchInput = new Search();
    return html`
      <header>
        <h1><i class="fas fa-book"></i> TargetLib</h1>

        ${searchInput.render()}

        <a href="#" title="Ver meus favoritos"><i class="fas fa-heart"></i></a>
      </header>
    `;
  }
}
