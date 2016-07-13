'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./profile-api');
const ui = require('./profile-ui');


const onCreateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
//  console.log(data);
  api.createProfile(data)
  .done(ui.createProfileSuccess)
  .fail(ui.createProfileFailure);
};

// const onUpdateProfile = (event) => {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   console.log(data);
//   api.updateProfile(data)
//   .done(ui.updateProfileSuccess)
//   .fail(ui.updateProfileFailure);
// };

// const onShowProfile = (event) => {
//   event.preventDefault();
//   api.showProfile()
//   .done(ui.showProfileSuccess)
//   .fail(ui.showProfileFailure);
// };
//
const onDeleteProfile = (event) => {
  event.preventDefault();
  // let buttonId = $(event.target).attr('data-id');
  api.deleteProfile()
  .done(ui.deleteProfileSuccess)
  .fail(ui.deleteProfileFailure);
};

//BEGINNING OF PROMISES
const onShowProfile = () => {
  // let data = getFormFields(event.target);
  return api.showProfile()
    .then(ui.showProfileSuccess)
    .catch(error => console.error(error))
};

const onUpdateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateProfile(data)
  .then(onShowProfile)
  .catch(error => console.error(error))
};
//
//

//   //   .then((response) => {
//   //     ui.updateProfileSuccess;
//   //   })
//   //   .then((response) => {
//   //     api.showProfile;
//   //   })
//   //   .catch
//   // }
//   // }
// //
// //   .done(ui.updateProfileSuccess)
// //   .fail(ui.updateProfileFailure);
// // };
//
//
// // const onSignIn = (event) => {
// //   event.preventDefault();
// //   let data = getFormFields(event.target);
// //   api.signIn(data)
// //   .done(ui.signInSuccess)
// //   .fail(ui.failure);
// // };
// //
// // const onSignOut = (event) => {
// //   event.preventDefault();
// //   api.signOut()
// //   .done(ui.signOutSuccess)
// //   .fail(ui.failure);
// // };
// //
//

const addProfileHandlers = () => {
  $('#create-profile').on('submit', onCreateProfile);
  // $('#update-profile').on('submit', function (event){
  //      event.preventDefault();
  //      let data = getFormFields(event.target);
  //     onUpdateProfile(data)
    //  .then(ui.updateProfileSuccess)
      // .then(() => {
      //   console.log("hello");
      //   return onShowProfile();
      // })
      // .catch(console.error)
//  });
  $('#update-profile').on('submit', onUpdateProfile);
  $('#delete-profile').on('click', onDeleteProfile);
  // $('#sign-out').on('submit', onSignOut);
  // $('#change-password').on('submit', onChangePassword);
};
//
module.exports = {
  addProfileHandlers,
};
