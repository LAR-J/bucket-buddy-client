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

const onUpdateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.updateProfile(data)
  .done(ui.updateProfileSuccess)
  .fail(ui.updateProfileFailure);
};

// const onSignOut = (event) => {
//   event.preventDefault();
//   api.signOut()
//   .done(ui.signOutSuccess)
//   .fail(ui.failure);
// };

// const onUpdateProfile = (event) => {
//   event.preventDefault();
//   // let data = getFormFields(event.target);
//   new Promise = (resolve, reject) => {
//   let data = getFormFields(event.target);
//     api.updateProfile(data, (error, response) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(response);
//       }
//     })
//     .then((response) => {
//       ui.updateProfileSuccess;
//     })
//     .then((response) => {
//       api.showProfile;
//     })
//     .catch
//   }
//
//
//   }
//
//   .done(ui.updateProfileSuccess)
//   .fail(ui.updateProfileFailure);
// };


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


const addProfileHandlers = () => {
  $('#create-profile').on('submit', onCreateProfile);
  $('#update-profile').on('submit', onUpdateProfile);
  // $('#sign-out').on('submit', onSignOut);
  // $('#change-password').on('submit', onChangePassword);
};
//
module.exports = {
  addProfileHandlers,
};
