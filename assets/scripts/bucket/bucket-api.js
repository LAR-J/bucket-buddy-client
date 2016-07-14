'use strict';

const app = require('../app.js');

const createBucket = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/buckets',
      method: "POST",
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

const updateBucket = (data, id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/buckets/' + id,
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

const showBucket = (id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/buckets/' + id,
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

const showUserBuckets = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/userbuckets',
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

const deleteBucket = (id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/buckets/' + id,
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
  createBucket,
  updateBucket,
  showBucket,
  showUserBuckets,
  deleteBucket,
};
