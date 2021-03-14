import { Input } from "./search/input.js";
import { Button } from "./search/button.js";

export class SearchUI {
  constructor(container) {
    this.container = container;
    this.button = new Button();
    this.input = new Input();
    this.subscribers = [];
    this.appendElement();
  }

  createForm() {
    const form = document.createElement("form");
    form.appendChild(this.input.createInput("Book Name"));
    form.appendChild(this.button.createButton("Search"));
    this.notifySubscribers();
    return form;
  }
  addButtonSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }
  notifySubscribers() {
    this.button.button.addEventListener("click", e => {
      e.preventDefault();
      this.subscribers.forEach(subscriber =>
        subscriber(this.input.inputField.value)
      );
    });
  }

  appendElement() {
    this.container.appendChild(this.createForm());
  }
}
