'use strict';

const app = require('../app.js');

const getProfile = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/profiles/',
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

const createProfile = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/profiles',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const updateProfile = (data) => {
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

const deleteProfile = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/profiles/' + app.profile.id,
      method: "DELETE",
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

module.exports = {
  createProfile,
  updateProfile,
  getProfile,
  deleteProfile,
};
