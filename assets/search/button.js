export class Button {
  constructor() {
    this.button;
  }

  createButton(name) {
    const button = document.createElement("button");
    button.setAttribute("id", "form__button");
    button.textContent = name;
    this.button = button;
    return button;
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  notifySubscriber(button) {
    button.addEventListener("click", e => {
      e.preventDefault();
      this.subscribers.forEach(subscriber => subscriber());
    });
  }
}
