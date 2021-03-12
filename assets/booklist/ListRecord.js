export class ListRecord {
  constructor() {}

  createListElement(image, description) {
    const listElement = document.createElement("li");
    listElement.classList.add("entry");
    listElement.appendChild(this.createImageElement(image));
    listElement.appendChild(this.createImageDescription(description));
    return listElement;
  }
  createImageElement(image) {
    const imgElement = document.createElement("img");
    imgElement.classList.add("entry__image");
    imgElement.setAttribute("src", image);
    imgElement.setAttribute("alt", "Cover");
    return imgElement;
  }
  createImageDescription(description) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("entry__name");
    paragraph.textContent = description;
    return paragraph;
  }
}
