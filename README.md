React Example Project
=========

Build based on [An Almost Static Stack](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319#.jvvvdhcju).



## Project Dependencies

This project utilizes the following tooling:
- [Create React App](https://github.com/facebookincubator/create-react-app)  
- [React Router](https://github.com/ReactTraining/react-router)  
- [React Snapshot](https://github.com/geelen/react-snapshot)  
- [React Helmet](https://github.com/nfl/react-helmet)  
- [Node Sass](https://github.com/sass/node-sass)  

__Please Note:__  
* `public/index.html` is the page template **(do not delete/rename)**.  
* `src/index.js` is the JavaScript entry point **(do not delete/rename)**.  
* WebPack only processes files within ```/src```. Add files & subdirectories here.  
* Only files within ```/public``` can be used from ```public/index.html```  
* Additional top-level directories may be created, but will not be included in the build process.  


### Initial Setup
```
// clone the repo
$ git clone https://github.com/mattcass/styling


// open the project directory
$ cd styling


// install dependencies
$ npm install
```

### Development

```
// Start Local Environment
$ npm start
```
The above will open [http://localhost:3000](http://localhost:3000) in the 
browser, report linting errors in the console, and live-reload as files are edited.


```
// Run Tests
$ npm test
```
Tests info here


```
// Build for distribution
$ npm run build
```
Generates the build folder for distribution, minifying assets and the filenames include the hashes.  

The build step also makes use of [React Snapshot](https://github.com/geelen/react-snapshot) to take snapshots
of all publically-accessible pages which allows you to serve static HTML/CSS and the bundled JS without any additional steps.


## Contributing

see contributing.md


## Design & Development Documentation and Assets

* [Development Deliverables Document](#!)  
* [InVision Prototype](#!)  
* [Coded Style Guide](#!)  
* [Coded Prototype](#!)  


### Project Team / Contributors

* [Matt Casserly](https://github.com/mattcass)  
* [Scott O'Hara](https://github.com/scottaohara)
