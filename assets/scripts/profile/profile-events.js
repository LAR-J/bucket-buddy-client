'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./profile-api');
const ui = require('./profile-ui');


const onCreateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.createProfile(data)
  .done(ui.createProfileSuccess)
  .fail(ui.createProfileFailure);
};

// const onSignIn = (event) => {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.signIn(data)
//   .done(ui.signInSuccess)
//   .fail(ui.failure);
// };
//
// const onSignOut = (event) => {
//   event.preventDefault();
//   api.signOut()
//   .done(ui.signOutSuccess)
//   .fail(ui.failure);
// };
//
// const onChangePassword = (event) => {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.changePassword(data)
//   .done(ui.success)
//   .fail(ui.failure);
// };
//

const addHandlers = () => {
  $('#create-profile').on('submit', onCreateProfile);
  // $('#sign-in').on('submit', onSignIn);
  // $('#sign-out').on('submit', onSignOut);
  // $('#change-password').on('submit', onChangePassword);
};
//
module.exports = {
  addHandlers,
};
