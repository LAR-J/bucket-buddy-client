'use strict';

const app = require('../app.js');
const homePageEvents = require('../homepage-events.js');

const signUpSuccess = () => {
//  $("#sign-up-message").text("Thank you for signing up.  Please sign in!");
  $("#modal-fullscreen-sign-up").modal('hide');

};

const signUpFailure = () => {
  $("#sign-up-message").text("");
  $("#sign-up-message").text("Something went wrong.  Please try again.");
};


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
  signUpSuccess,
  signUpFailure,
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
