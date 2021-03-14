import "./style.css";
import { SearchUI } from "./assets/SearchUI.js";
import { MovieListUI } from "./assets/MovieListUI.js";
import { FetchData } from "./assets/fetchData.js";

const app = document.querySelector(".app");
const searchUI = new SearchUI(app);
const fetchData = new FetchData();
const movieListUI = new MovieListUI(app, "results");

searchUI.addButtonSubscriber(data => {
  fetchData.fetchData(data);
});

fetchData.addSubscriber(data => {
  movieListUI.fillList(data);
});
