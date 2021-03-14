import { ListRecord } from "./movielist/ListRecord.js";

export class MovieListUI {
  constructor(container) {
    this.container = container;
    this.listRecord = new ListRecord();
  }
  createList(className) {
    const list = document.createElement("ul");
    list.classList.add(className);
    return list;
  }
  pushMovieData(data) {
    const list = createList("results");
    data.results.forEach(result => {
      list.appendChild(
        this.listRecord.createElement(result.image, result.title, result.id)
      );
    });
    return list;
  }

}
