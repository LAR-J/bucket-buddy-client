'use strict';

const app = require('../app.js');

const createProfileSuccess = (data) => {
  app.profile = data.profile;
};

const getProfileSuccess = (data) => {
  app.profile = data.profile;
};

const deleteProfileSuccess = () => {
  console.log('Profile deleted successfully');
  app.profile = null;
};

module.exports = {
  createProfileSuccess,
  getProfileSuccess,
  deleteProfileSuccess,
};
