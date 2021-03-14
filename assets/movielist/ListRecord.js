const MOVIE_URL = "https://www.imdb.com/title/";

export class ListRecord {
  constructor() {}

  createListElement(image, title, movieID) {
    const listElement = document.createElement("li");
    listElement.classList.add("entry");
    listElement.appendChild(this.createImageElement(image));
    listElement.appendChild(this.createImageTitle(title, movieID));
    return listElement;
  }
  createImageElement(image) {
    const imgElement = document.createElement("img");
    imgElement.classList.add("entry__image");
    imgElement.setAttribute("src", image);
    imgElement.setAttribute("alt", "Cover");
    return imgElement;
  }
  createImageTitle(title, id) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("entry__name");
    paragraph.appendChild(createAnchorElement(title, `${MOVIE_URL}${id}`));
    return paragraph;
  }
  createAnchorElement(title, link) {
    const anchorElement = document.createElement("a");
    anchorElement.setAttribute("href", link);
    anchorElement.textContent = title;
    return anchorElement;
  }
}
