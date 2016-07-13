'use strict';

const app = require('../app.js');

const createProfileSuccess = (data) => {
  if (data) {
   console.log(data);
  } else {
    console.log('Success');
  }
  app.profile = data.profile;
   console.log(app.profile);
};

const createProfileFailure = (error) => {
  console.error(error);
};

const updateProfileSuccess = () => {
//  app.profile = data.profile;
  console.log('update profile success');
};

const updateProfileFailure = (error) => {
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
  updateProfileSuccess,
  updateProfileFailure,
  // signInSuccess,
  // signOutSuccess
};
