# Planday Grid

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It renders a paginated list of images, 8 per page, that are fitted to cover, so the images are aliigned and evenly sized. It is possible to search for titles with the serach functionality. If a search finds matches, the results are filtered and displayed in the image list. If there is one result, a large image is displayed in it's actual dimensions. If there are no search results, an empty state is rendered.

The solution is fully accessible and responsive.

There were a few errors in the data that have been corrected.

## Tech stack

- Mui was used as the main component library as it offers clean design, well functioning and accessible out of the box components that are easy to use.
- React context was used for the global state since it's very easy to set up and is the defualt global state tool for React JS.
- React testing library and Jest was used for UI tests. Javascirpt was chosen for the tests due to lack of familiarity with Typescript.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
