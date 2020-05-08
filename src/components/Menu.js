import { html } from "htm/preact";
import CategoryList from "./CategoriesList";

export default class Menu {
  async render() {
    const categoryListComponent = new CategoryList();

    return html`
      <aside class="menu">
        <h1>Categorias</h1>

        ${await categoryListComponent.render()}
      </aside>
    `;
  }
}
