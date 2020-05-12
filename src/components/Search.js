import { html } from "htm/preact";
import GoogleBooks from "../services/googleBooks";

export default class Search {
  async doSearch(event) {
    if (event.keyCode === 13) {
      const value = event.target.value;

      const valueReplaced = value.split(" ").join("+");
      global.router.navigateTo(`search/${valueReplaced}`);
    }
  }

  render() {
    return html`
      <div class="search">
        <input
          type="search"
          placeholder="O que você procura?"
          onkeyup="${this.doSearch}"
        />
        <span><i class="fas fa-search"></i></span>
      </div>
    `;
  }
}
