'use strict';

const app = require('../app.js');

const createProfileSuccess = (data) => {
  app.profile = data.profile;
  $('.create-profile').hide();
};

const updateProfileSuccess = () => {
  $('.update-profile').hide();
};

const getProfileSuccess = (data) => {
  app.profile = data.profile;
};

const deleteProfileSuccess = () => {
  console.log('Profile deleted successfully');
  app.profile = null;
};

const showUpdateSuccess = (data) => {
  app.profile = data.profile;
  console.log(app.profile);
  $('.update-profile').show();
};

module.exports = {
  createProfileSuccess,
  getProfileSuccess,
  deleteProfileSuccess,
  updateProfileSuccess,
  showUpdateSuccess,
};
