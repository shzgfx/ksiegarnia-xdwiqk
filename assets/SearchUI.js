import { Input } from "./search/input.js";
import { Button } from "./search/button.js";
import { FetchData } from "./fetchData.js";

export class SearchUI {
  constructor() {
    this.button = new Button();
    this.input = new Input();
    this.fetchData = new FetchData();
  }

  createForm() {
    const form = document.createElement("form");
    form.appendChild(this.input.createInput("Book Name"));
    form.appendChild(this.button.createButton("Search"));
    this.addButtonSubscriber(() =>
      this.fetchData.fetchData(this.input.getInputData())
    );
    return form;
  }
  addButtonSubscriber(subscriber) {
    this.button.addSubscriber(subscriber);
  }
}
