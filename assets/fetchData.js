const API_KEY = "k_fg9k4x78";
const API_URL = "https://imdb-api.com/en/API/SearchMovie/";

export class FetchData {
  constructor() {
    this.subscribers = [];
  }
  fetchData(input) {
    fetch(`${API_URL}${API_KEY}/${input}`)
      .then(response => response.json())
      .then(data => this.notifySubscribers(data));
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  notifySubscribers(data) {
    this.subscribers.forEach(subscriber => subscriber(data));
  }
}
