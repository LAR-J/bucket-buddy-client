'use strict';

const app = require('../profile-app.js');

const createProfile = (data) => {
  return $.ajax({
    url: app.host + '/profiles/' + app.user.id,
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

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
// const changePassword = (data) => {
//   return $.ajax({
//     url: app.host + '/change-password/' + app.user.id,
//     method: "PATCH",
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
// };

module.exports = {
  createProfile,
  // signIn,
  // signOut,
  // changePassword,
};
