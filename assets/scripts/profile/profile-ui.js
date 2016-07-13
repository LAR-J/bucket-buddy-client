'use strict';

const app = require('../app.js');

const createProfileSuccess = (data) => {
  if (data) {
//   console.log(data);
  } else {
//    console.log('Success');
  }
  app.profile = data.profile;
//   console.log(app.profile);
};

const createProfileFailure = (error) => {
  console.error(error);
};

const updateProfileSuccess = () => {
//  app.profile = data.profile;
//  console.log('update profile success');
};

const updateProfileFailure = (error) => {
  console.error(error);
};


const showProfileSuccess = (data) => {
  app.profile = data.profile;
//  console.log(app.profile);
};

const showProfileFailure = (error) => {
  console.error(error);
};

const deleteProfileSuccess = () => {
  console.log('Profile deleted successfully');
  app.profile = null;
};

const deleteProfileFailure = (error) => {
  console.error(error);
};

module.exports = {
  createProfileSuccess,
  createProfileFailure,
  updateProfileSuccess,
  updateProfileFailure,
  showProfileSuccess,
  showProfileFailure,
  deleteProfileSuccess,
  deleteProfileFailure,
  // signInSuccess,
  // signOutSuccess
};
