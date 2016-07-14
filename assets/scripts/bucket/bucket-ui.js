'use strict';

const app = require('../app.js');
const api = require('./bucket-api');
const bucketTemplate = require('./../templates/view-buckets.handlebars');
//include handlebars?

const onDeleteBucket = (event) => {
  event.preventDefault();
  let buttonId = $(event.target).attr('data-id');
  api.deleteBucket(buttonId)
  .then(deleteBucketSuccess)
  // .then(ui.showUserBuckets)
  // .then(ui.showUserBucketsSuccess)
  .catch(error => console.error(error))
};

const onUpdateBucket = (event) => {
  event.preventDefault();
  let buttonId = $(event.target).attr('data-id');
  let data = getFormFields(event.target);
  api.updateBucket(data, buttonId)
  .then(updateBucketSuccess)
  .catch(error => console.error(error))
};



const createBucketSuccess = (data) => {
  if (data) {
  console.log(data);
  } else {
   console.log('Success');
  }
  // data.bucket.tags = data.bucket.tags.split(',');
  app.bucket = data.bucket;
};

const createBucketFailure = (error) => {
  console.error(error);
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

const showUserBucketsSuccess = (data) => {
  $('#user-buckets').html(bucketTemplate(data));
  $('.delete-bucket-button').on('click', onDeleteBucket);
  $('.update-bucket-button').on('click', onUpdateBucket);

//  $('.bucket-display').on('submit', onEditBucket);
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

const updateBucketSuccess = (data) => {
  app.bucket = data.bucket;
};

const deleteBucketFailure = (error) => {
  console.error(error);
};



module.exports = {
  createBucketSuccess,
  createBucketFailure,
  updateBucketSuccess,
  updateBucketFailure,
  showBucketSuccess,
  showBucketFailure,
  showUserBucketsSuccess,
  showAllBucketsFailure,
  deleteBucketSuccess,
  deleteBucketFailure,
};
