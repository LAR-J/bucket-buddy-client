'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./profile-api');
const ui = require('./profile-ui');

const onGetUserProfile = () => {
  $('#edit-profile-button').show();
  return api.getProfile()
  .then(ui.getProfileSuccess)
  .catch((error) => {
    console.error(error);
    $('.create-profile').show();
    $('#all-buckets').html('');
    $('#user-buckets').html('');
  })
};

const onCreateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  return api.createProfile(data)
  .then(ui.createProfileSuccess)
  .catch(error => console.error(error))
};

const onDeleteProfile = (event) => {
  event.preventDefault();
  return api.deleteProfile()
  .then(ui.deleteProfileSuccess)
  .catch(error => console.error(error))
};

const onUpdateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  return api.updateProfile(data)
  .then(onGetUserProfile)
  .then(ui.updateProfileSuccess)
  .catch(error => console.error(error))
};

const showUpdateProfile = (event) => {
  event.preventDefault();
  return api.getProfiles()
  .then(ui.showUpdateSuccess)
  .catch(error => console.error(error))
};

const loadEditProfile = () => {
  event.preventDefault();
  ui.editProfileForm();
  $('#update-profile').on('submit', onUpdateProfile);
};

const addProfileHandlers = () => {
  $('#create-profile').on('submit', onCreateProfile);
  $('#update-profile').on('submit', onUpdateProfile);
  $('#delete-profile').on('click', onDeleteProfile);
  $('#update-profile-nav').on('click', showUpdateProfile);
  $('#view-profile-nav').on('click', onGetUserProfile);
  $('#edit-profile-button').on('click', loadEditProfile);
};

module.exports = {
  addProfileHandlers,
};
