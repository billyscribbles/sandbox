# Sandbox

## Installing

`yarn` - Install all the dependencies for the web app and server

Note: currently using node version 12.16.3

## Running locally

The project has been packaged altogether to run all projects via:

`yarn start` will start the entire app concurrently with the front-end and associated servers.

The app will start up in http://localhost:3000

The mock API server will start up in http://localhost:8083

## Project structure

The project uses yarn workspaces to manage both frontend and server apps

| File Path        | Contains                       |
| ---------------- | ------------------------------ |
| `app/frontend/*` | Source for the front end app   |
| `app/mock/*`     | Source for the mock API server |

## Contributing

All contributions are to be made via Pull Requests and commits via yarn commit:

House keeping rules:

-   Create a new branch in develop and code away
-   Keep all PR small and concise with detailed headings
-   Once ready, complete the following:

    ```bash
    git add .
    yarn commit
    git push
    ```

-   Raise a PR and have it reviewed
-   Once reviewed, squash and merge

Commits are organized via [commitizen](https://github.com/commitizen/) with combinations of linting and formatting.

## Typescript

Entire project is written in typescript, where we enforce strongly type functions and props. PropType is not required in this project but we do encourage using `yarn lint` and fixing all the common rules outlined by es-lint.

To generate types from a JSON file simply auto generate via [quicktype](https://app.quicktype.io/?l=ts)

## FAQ

### After installing dependencies I receive a warning - "There might be a problem with the project dependency tree."

Usually this problem is caused by having a `node_module` folder in the parent directory of the project you are running. Just remove the node_modules folder for the root project is usually enough this fix this issue. Simply run `yarn` again and make sure you are on the right node version.

### How to document and style

Rules and styling can be found [here](https://github.com/DavidAnson/markdownlint/blob/v0.23.1/doc/Rules.md#md041)
