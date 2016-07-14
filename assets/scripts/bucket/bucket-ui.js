'use strict';

const app = require('../app.js');
const api = require('./bucket-api');
const bucketTemplate = require('./../templates/view-buckets.handlebars');
const updateBucketTemplate = require('./../templates/update-bucket-form.handlebars');
//include handlebars?

// const onDeleteBucket = (event) => {
//   event.preventDefault();
//   let buttonId = $(event.target).attr('data-id');
//   api.deleteBucket(buttonId)
//   .then(deleteBucketSuccess)
//   .catch(error => console.error(error))
// };

const createBucketSuccess = (data) => {
  if (data) {
  console.log(data);
  } else {
   console.log('Success');
  }
  app.bucket = data.bucket;
    $(".modal-fullscreen.create-bucket").modal('hide');

};

const createBucketFailure = (error) => {
  console.error(error);
};

const updateBucketFailure = (error) => {
  console.error(error);
};

const showBucketSuccess = (data) => {
  app.bucket = data.bucket;
  console.log(app.bucket);
  $('#update-bucket-form').html(updateBucketTemplate(app.bucket));

  //handlebars?
};

const showBucketFailure = (error) => {
  console.error(error);
};

const showUserBucketsSuccess = (data) => {
  $('#user-buckets').html(bucketTemplate(data));
};

const showAllBucketsFailure = (error) => {
  console.error(error);
};

const deleteBucketSuccess = () => {
  console.log('Bucket deleted successfully');
  app.bucket = null;
};

const updateBucketSuccess = (data) => {
  $(".modal-fullscreen.update-bucket").modal('hide');
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
