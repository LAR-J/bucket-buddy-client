'use strict';

const app = require('../app.js');
const viewProfileTemplate = require('../templates/view-profile.handlebars');
const editProfileTemplate = require('../templates/edit-profile.handlebars');

const createProfileSuccess = (data) => {
  app.profile = data.profile;
  $('.create-profile').hide();
  $('#user-profile').html(viewProfileTemplate(app.profile));
  $('.user-profile').show();
};

const updateProfileSuccess = () => {
  $('.update-profile').hide();
};

const getProfileSuccess = (data) => {
  app.profile = data.profile;
  console.log(app.profile);
  $('#user-profile').html(viewProfileTemplate(app.profile));
  $('.user-profile').show();
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

const editProfileForm = () => {
  $('#user-profile').html(editProfileTemplate(app.profile));
};

module.exports = {
  createProfileSuccess,
  getProfileSuccess,
  deleteProfileSuccess,
  updateProfileSuccess,
  showUpdateSuccess,
  editProfileForm,
};
