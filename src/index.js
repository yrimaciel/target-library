import { render } from "htm/preact";

import Home from "./pages/Home";

async function renderHome() {
  const home = new Home();
  const html = await home.render();

  render(html, document.querySelector("#app"));
}

renderHome();
