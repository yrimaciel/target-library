export default class Favorites {
  addItem(book) {
    const items = this.getItems();
    items.push(book);

    const arrayAsString = JSON.stringify(items);

    window.localStorage.setItem("favorites", arrayAsString);
  }

  getItems() {
    return JSON.parse(window.localStorage.getItem("favorites")) || [];
  }

  removeItem(book) {
    const items = this.getItems();
    const position = items.findIndex((item) => item.id === book.id);
    items.splice(position, 1);

    console.log(items);

    const arrayAsString = JSON.stringify(items);

    window.localStorage.setItem("favorites", arrayAsString);
  }
}
