import { html } from "htm/preact";
import GoogleBooks from "../services/googleBooks";

export default class CategoryList {
  async render() {
    const api = new GoogleBooks();
    const categories = await api.getCategories();

    return html`
      <ul>
        ${categories.map((category) => {
          return html`<li>
            <a href="#">${category.title}</a>
          </li>`;
        })}
      </ul>
    `;
  }
}
