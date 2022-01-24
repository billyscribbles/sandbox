# Mock API

[JSON Server](https://github.com/typicode/json-server): Generates a fake REST API within 30 seconds.

[LowDB](https://github.com/typicode/lowdb): Generates a tiny local JSON database for small projects.

## Running locally

Mock API server runs locally on http://localhost:8083 to see documentation

Sample: http://localhost:8083/venues/1

Note: Current server has a mocked delay of 1 second to simulate a real API server

## Generating Mock Data

Simply create a seed JSON file inside `seeds` and just run `yarn start` and it will automatically generate mock data within `db.json`
