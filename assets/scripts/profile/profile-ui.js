'use strict';

const app = require('../app.js');

const createProfileSuccess = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const createProfileFailure = (error) => {
  console.error(error);
};

// const signInSuccess = (data) => {
//   app.user = data.user;
//   console.log(app.user);
// };
//
// const signOutSuccess = () => {
//   console.log('User signed out successfully');
//   app.user = null;
// };

module.exports = {
  createProfileSuccess,
  createProfileFailure,
  // signInSuccess,
  // signOutSuccess
};
