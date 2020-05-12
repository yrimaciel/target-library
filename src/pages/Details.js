import { html } from "htm/preact";

export default class Details {
  async render(book) {
    return html`
      <article class="book-details">
        <div className="image">
          <img src="" alt="" />
        </div>

        <div className="book-content">
          <div className="top">
            <div className="actions"></div>
          </div>

          <div className="description"></div>

          <hr />

          <section></section>
        </div>
      </article>
    `;
  }
}
