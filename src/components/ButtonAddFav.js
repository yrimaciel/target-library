import { html } from "htm/preact";

export default class ButtonAddFav {
  render() {
    return html`
      <button class="btn-fav" title="Adicionar aos favoritos">
        <i class="fab fa-gratipay"></i>
      </button>
    `;
  }
}
