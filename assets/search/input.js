export class Input {
  constructor() {
    this.inputField;
  }

  createInput(placeholder) {
    const inputField = document.createElement("input");
    inputField.classList.add("form__input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("id", "book-name");
    inputField.setAttribute("placeholder", placeholder);
    this.inputField = inputField;
    return inputField;
  }

  getInputData() {
    return this.inputField.value;
  }
}
