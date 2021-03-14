import "./style.css";
import { SearchUI } from "./assets/SearchUI.js";
import { ListRecord } from "./assets/booklist/ListRecord.js";
import { FetchData } from "./assets/fetchData.js";

const searchField = new SearchUI();
const listElement = new ListRecord();
const fetchData = new FetchData();

const app = document.querySelector(".app");
app.appendChild(searchField.createForm());
app.appendChild(
  listElement.createListElement(
    "https://via.placeholder.com/50",
    "To jest przykładowa pozycja"
  )
);

searchField.addButtonSubscriber(data => {
  fetchData.fetchData(data);
});
