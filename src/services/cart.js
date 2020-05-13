export default class Cart {
  addItem(book) {
    console.log(book);
    const items = this.getItems();
    items.push(book);

    const arrayAsString = JSON.stringify(items);

    window.localStorage.setItem("cart", arrayAsString);
  }

  getItems() {
    return JSON.parse(window.localStorage.getItem("cart")) || [];
  }

  removeItem(book) {
    const items = this.getItems();
    const position = items.findIndex((item) => item.id === book.id);
    items.splice(position, 1);

    console.log(items);

    const arrayAsString = JSON.stringify(items);

    window.localStorage.setItem("cart", arrayAsString);
  }
}
