import { ListRecord } from "./movielist/ListRecord.js";

export class MovieListUI {
  constructor(container) {
    this.container = container;
  }

  handleMovieData(data) {
    console.log(data);
  }
}
