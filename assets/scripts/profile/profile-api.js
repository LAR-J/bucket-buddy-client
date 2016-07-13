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
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/profiles/' + app.profile.id,
      method: "PATCH",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const showProfile = () => {
//  console.log(app);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/profiles/' + app.profile.id,
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
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
const deleteProfile = () => {
  return $.ajax({
    url: app.host + '/profiles/' + app.profile.id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};



module.exports = {
  createProfile,
  updateProfile,
  showProfile,
  deleteProfile,
  // signIn,
  // signOut,
  // changePassword,
};
