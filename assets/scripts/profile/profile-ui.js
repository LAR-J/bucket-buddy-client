'use strict';

const app = require('../app.js');

const createProfileSuccess = (data) => {
  app.profile = data.profile;
};

// const updateProfileSuccess = () => {
// //  app.profile = data.profile;
// //  console.log('update profile success');
// };

const getProfileSuccess = (data) => {
  app.profile = data.profile;
};

const deleteProfileSuccess = () => {
  console.log('Profile deleted successfully');
  app.profile = null;
};

module.exports = {
  createProfileSuccess,
  // updateProfileSuccess,
  getProfileSuccess,
  deleteProfileSuccess,
  // signInSuccess,
  // signOutSuccess
};
