'use strict';

const app = require('../app.js');

const createProfile = (data) => {
  // console.log(data);
  return $.ajax({
    url: app.host + '/profiles',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const updateProfile = (data) => {
  // console.log(data);
  return $.ajax({
    url: app.host + '/profiles/' + app.profile.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};
//GET to show profile (single profile)

//PATCH to update profile

//DELETE to destroy the profile

// const signIn = (data) => {
//   return $.ajax({
//     url: app.host + '/sign-in',
//     method: "POST",
//     data: data,
//   });
// };
//
// const signOut = () => {
//   return $.ajax({
//     url: app.host + '/sign-out/' + app.user.id,
//     method: "DELETE",
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };
//


module.exports = {
  createProfile,
  updateProfile,
  // signIn,
  // signOut,
  // changePassword,
};
