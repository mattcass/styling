# Styling
## Build based on [An Almost Static Stack](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319#.jvvvdhcju).

This project utilizes the following tooling:
- [Create React App](https://github.com/facebookincubator/create-react-app).
- [React Router](https://github.com/ReactTraining/react-router).
- [React Snapshot](https://github.com/geelen/react-snapshot).
- [React Helmet](https://github.com/nfl/react-helmet).

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

The build step also makes use of [React Snapshot](https://github.com/geelen/react-snapshot) to take snapshots
of all publically-accessible pages which allows you to serve static HTML/CSS and the bundled JS without any additional steps.
