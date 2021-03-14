import { ListRecord } from "./movielist/ListRecord.js";

export class MovieListUI {
  constructor(container, className) {
    this.container = container;
    this.listRecord = new ListRecord();
    this.list;
    this.createList(className);
  }
  createList(className) {
    const list = document.createElement("ul");
    list.classList.add(className);
    this.list = list;
    this.container.appendChild(list);
  }
  pushMovieData(data) {
    data.results.forEach(result => {
      this.list.appendChild(
        this.listRecord.createListElement(result.image, result.title, result.id)
      );
    });
    //return list;
  }
  fillList(data) {
    this.list.innerHTML = "";
    this.pushMovieData(data);
  }
}
