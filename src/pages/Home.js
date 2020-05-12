import { html } from "htm/preact";
import CardList from "../components/CardList";

export default class Home {
  async render() {
    const cardListComponent = new CardList();

    return html`
      <div>
        <section class="content">
          ${await cardListComponent.render()}
        </section>
      </div>
    `;
  }
}
