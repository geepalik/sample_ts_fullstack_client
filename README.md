## Description

A full stack web application built in the MERN Stack with TypeScript. Back-end is run with Node.js, Express and MongoDB database in a Docker container.

## Objective

Build a weather web app that allows querying weather in multiple cities at the same time

## Requirements

- Web page consisting of a text area and a "Search" button.
- User should be able to input any number of comma-separated city names.
- After clicking "Search" the page should present a table showing the current weather in each of the provided cities.
- In addition, the web page should also show the list of 10 most recent searches made using the app.
- Search history has to be fetched from the server on page load.
- When clicking on a history entry, the original result of that query should be displayed using the same table layout without making any new requests.

### Search

> _Type city names here_

> [**Show Weather**]()

---

### Today

| City     | Weather                    |
| -------- | -------------------------- |
| Tel Aviv | 28 °C, Wind 0 km/h, Sunny  |
| Istanbul | 24 °C, Wind 10 km/h, Rain  |
| Athens   | 26 °C, Wind 15 km/h, Clear |

---

### Search History

| Time             | Cities                          |
| ---------------- | ------------------------------- |
| Aug 6 2021 14:00 | Tel Aviv, Istanbul, Athens      |
| Aug 6 2021 14:20 | Stockholm, Amsterdam, Bucharest |

---

## Tips

- To query the weather by city you can use this API request (GET https://goweather.herokuapp.com/weather/{city}).
  if for some reason it doesnt work you can use : 
https://api.weatherapi.com/v1/current.json?q={city}&key=0c2ec368bdf34942bd0104420233005

- Persistence layer can be implemented using any technology, such as the filesystem, embedded database or any other database of your choice.
- Try to avoid wasting time on tooling and set up, stick to the tech stack you are familiar with.
- Read requirements carefully and write down a short technical specification **before** you start coding. This will help you stay on track and make for a more constructive discussion after you finish the assignment.

## Bonus points

- TypeScript (Done)
- Caching (assume the weather forecast is valid for 5 minutes)
- API rate limiting (assume maximum of 2 requests per second are allowed to the third-party weather endpoint)
- Nicer city selection UI (city name autocomplete, multiple item selection)
