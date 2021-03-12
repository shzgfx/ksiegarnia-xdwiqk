import "./style.css";
import { SearchUI } from "./assets/SearchUI.js";
import { ListRecord } from "./assets/booklist/ListRecord.js";
const API_URL =
  "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=harry%20potter";

const searchField = new SearchUI();
const listElement = new ListRecord();

const app = document.querySelector(".app");
app.appendChild(searchField.createForm());
app.appendChild(
  listElement.createListElement(
    "https://via.placeholder.com/50",
    "To jest przykładowa pozycja"
  )
);
