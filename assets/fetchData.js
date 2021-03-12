export class FetchData {
  constructor() {}
  fetchData(input) {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=${input}`
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }
}
