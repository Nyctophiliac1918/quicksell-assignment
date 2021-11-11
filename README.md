# Counter App

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* This has been deployed on [Netlify](https://counter-app-karan-saraswat.netlify.app/).

## Rules

* By default, the initial value and the max value has been set to 1 and 1000, respectively.
* The max value can be changed to any valid numerical value while the initial value is the one that is received through the given API, which can't be changed.
* The value in the counter can be incremented as well as decremented by 1 or its value can be changed to any valid number lesser than or equal to the max value.
* The max value can also be changed but if its value gets lesser than the counter's value, the counter's value will become equal to the max value.

## Directory Structure

### Frontend

* src
  * components: Contains various react components which are to be used in the project
    * Counter.jsx: It has the counter with the +, - buttons
    * CounterVal.jsx: It shows the counter value.
  * index.js: entry point of the react app
  * App.js
* public: contains all the static assets like html, logos and styles file which are to be served.

### Deployed Link
* https://lottery-app-1918.netlify.app

## Setup
To run this project, install it locally using npm.

```
$ cd frontend
$ npm install
$ npm start
```

Default port has been set to 3000
