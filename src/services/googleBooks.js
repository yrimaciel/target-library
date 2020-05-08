import Axios from "axios";

export default class GoogleBooks {
  getBooks() {
    return Axios.get(`https://www.googleapis.com/books/v1/volumes?q=0`).then(
      (res) => res.data
    );
  }

  getCategories() {
    return new Promise((resolve) => {
      const categoriesList = [
        { title: "Lançamentos" },
        { title: "Mais vendidos" },
        { title: "Infantis" },
        { title: "Romances" },
        { title: "Ficcção Científica" },
      ];

      resolve(categoriesList);
    });
  }

  searchBooks(query) {
    return Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    ).then((res) => res.data);
  }
}
