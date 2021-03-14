const API_KEY = "k_fg9k4x78";
const API_URL = "https://imdb-api.com/en/API/SearchMovie/";

export class FetchData {
  constructor() {}
  fetchData(input) {
    fetch(`${API_URL}${API_KEY}/${input}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }
}
