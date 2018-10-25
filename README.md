# Front-end Documentation

## Overall
According to the test requirement, no runtime third-part library or framework is used on this project but tools for development are used such as ESlint, Babel, Webpack and its corresponding toolchain like various kinds of loaders. To boost productivity, I create a React-like library for building the interactive user interface which is called "Veact" for this project, the source code of this library is stored in the /src/lib folder. And the library is hosted on another repository under my github, detailed [documentation](https://github.com/77Vincent/veact) is available there.

## Pre-run
```bash
npm install
```

## Run
```bash
npm start 
```

## Build 
The build files for distribution will be in the build folder.
```bash
npm run build 
```

## Test
```bash
npm test 
```

## Architecture
The architecture of this project is pretty much like a typical React-based project.

#### /src/assets/
For all the static assets such as images, fonts etc.

#### /src/base/
Is for the base component which is the "App" component and its SCSS file including variables.

#### /src/components/
Is for all the components, for consistency, each component is a folder containing one index.js file and one index.scss file.

#### /src/lib/
Is for all the homemade libraries, in this case, only Veact.

#### /src/index.js
Entry Javascript file of the application

#### /src/index.html
Entry HTML file of the application

#### /src/model.js
Stores the whole model of the application including data and any kinds of states, which acts like the [store](https://redux.js.org/api/store) in a Redux-based application.
