'use strict';

const app = require('../app.js');
const homePageEvents = require('../homepage-events.js');


const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  homePageEvents.hideHomePage();
  homePageEvents.displayNav();
  app.user = data.user;
  console.log(app.user);
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  homePageEvents.displayHomePage();
  homePageEvents.hideNav();
  app.user = null;
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
