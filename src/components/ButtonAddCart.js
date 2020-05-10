import { html } from "htm/preact";

export default class ButtonAddCart {
  render() {
    return html`
      <button class="btn-cart" title="Adicionar ao carrinho">
        <i class="fas fa-shopping-cart"></i>
      </button>
    `;
  }
}
