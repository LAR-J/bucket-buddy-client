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

const updateBucket = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/buckets/' + app.bucket.id,
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

const showBucket = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/buckets/' + app.bucket.id,
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

const showAllBuckets = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/buckets',
      method: 'GET',
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const deleteBucket = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: app.host + '/buckets/' + app.bucket.id,
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
  showAllBuckets,
  deleteBucket,
};
