import { html } from "htm/preact";

export default class ButtonDetails {
  render() {
    return html`
      <button class="btn-details" title="Ver detalhes">
        <i class="fas fa-info-circle"></i>
      </button>
    `;
  }
}
