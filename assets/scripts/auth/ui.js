'use strict';

const app = require('../app.js');
const homePageEvents = require('../homepage-events.js');

const signUpSuccess = () => {
  $("#modal-fullscreen-sign-up").modal('hide');
  $("#sign-up-message").text("");
  $(".sign-up-fields").val("");
};

const signUpFailure = () => {
  $("#sign-up-message").text("");
  $("#sign-up-message").text("Something went wrong.  Please try again.");
};

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  homePageEvents.hideHomePage();
  homePageEvents.displayNav();
  app.user = data.user;
//  console.log(app.user);
  $("#modal-fullscreen-sign-in").modal('hide');
  $("#sign-in-message").text("");
  $(".sign-in-fields").val("");
};

const signInFailure = () => {
  $("#sign-in-message").text("");
  $("#sign-in-message").html("WRONG! Try again. <br> Check that you've signed up and that your password is correct");
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  homePageEvents.displayHomePage();
  homePageEvents.hideNav();
  app.user = null;
  $("#sign-in-message").text("");
  $("#sign-up-message").text("");
  $("#sign-up-message").html("");
  $(".hide-homescreen").hide();
  $(".display-homescreen").show();
  $(".display-nav").show();
  $(".hide-nav").hide();
  $("#user-profile").html('');
  $('#user-bucket')
  $('#all-buckets').html('');
  $('#user-buckets').html('');
};

const changePasswordSuccess = () => {
  $("#change-password-message").text("");
  $("#change-password-message").html("");
  $("#modal-change-password").modal('hide');
}

const changePasswordFailure= () => {
  $("#change-password-message").text("");
  $("#change-password-message").html("WRONG! Check your old password");
};



module.exports = {
  signUpSuccess,
  signUpFailure,
  success,
  failure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure
};
