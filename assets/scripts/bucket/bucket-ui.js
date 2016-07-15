'use strict';

const app = require('../app.js');
const api = require('./bucket-api');
const bucketTemplate = require('./../templates/view-buckets.handlebars');
const updateBucketTemplate = require('./../templates/update-bucket-form.handlebars');
const allBucketsTemplate = require('./../templates/view-all-bucket.handlebars');

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

  //handlebars?
};

const showAllBucketsSuccess = (data) => {
  console.log(data);
  $('#user-profile').html('');
  $('#user-buckets').html('');
  $('#all-buckets').html(allBucketsTemplate(data));

  //handlebars?
};

const showBucketFailure = (error) => {
  console.error(error);
};

const showUserBucketsSuccess = (data) => {
  $('#user-buckets').html(bucketTemplate(data));
  $('#user-profile').html('');
  $('#all-buckets').html('');
  $('#update-bucket-form').html(updateBucketTemplate(app.bucket));
};
//
// const showAllBucketsFailure = (error) => {
//   console.error(error);
// };

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
  deleteBucketSuccess,
  deleteBucketFailure,
  showAllBucketsSuccess,
};
