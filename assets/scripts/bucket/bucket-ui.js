'use strict';

const app = require('../app.js');
//include handlebars?

const createBucketSuccess = (data) => {
  if (data) {
  console.log(data);
  } else {
   console.log('Success');
  }
  app.bucket = data.bucket;
};

const createBucketFailure = (error) => {
  console.error(error);
};

const updateBucketSuccess = () => {
  console.log('update bucket success');
};

const updateBucketFailure = (error) => {
  console.error(error);
};

const showBucketSuccess = (data) => {
  app.bucket = data.bucket;
  //handlebars?
};

const showBucketFailure = (error) => {
  console.error(error);
};

const showAllBucketsSuccess = (data) => {
//handlebars?
//app = data??
};

const showAllBucketsFailure = (error) => {
  console.error(error);
};

const deleteBucketSuccess = () => {
  console.log('Bucket deleted successfully');
  app.bucket = null;
};

const deleteBucketFailure = (error) => {
  console.error(error);
};

module.exports = {
  createBucketSuccess,
  createBucketFailure,
  updateBucketSuccess,
  updateBucketSuccess,
  showBucketSuccess,
  showBucketFailure,
  showAllBucketsSuccess,
  showAllBucketsFailure,
  deleteBucketSuccess,
  deleteBucketFailure,
};
