'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  if(data.credentials.password) {
    api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.signUpFailure);
} else {
  $("#sign-up-message").text("Please enter a password!");
}
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFailure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  if(data.passwords.old === data.passwords.new) {
    $("#change-password-message").html("Nice try. Pick a new password.");
  } else if(data.passwords.new) {
    api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changPasswordFailure);
  } else {
    $("#change-password-message").html("Please enter a password.");
  }
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
};
//
module.exports = {
  addHandlers,
};
