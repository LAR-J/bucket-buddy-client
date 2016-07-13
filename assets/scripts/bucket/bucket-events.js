'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./bucket-api');
const ui = require('./bucket-ui');

const onCreateBucket = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createBucket(data)
  .done(ui.createBucketSuccess)
  .fail(ui.createBucketFailure);
};

const onShowBucket = () => {
  return api.showBucket()
    .then(ui.showBucketSuccess)
    .catch(error => console.error(error))
};

const onShowAllBuckets = () => {
  return api.showAllBuckets()
    .then(ui.showAllBucketsSuccess)
    .catch(error => console.error(error))
};

const onUpdateBucket = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateBucket(data)
  .then(onShowBucket)
  .catch(error => console.error(error))
};

const onDeleteBucket = (event) => {
  event.preventDefault();
  api.deleteBucket()
  .done(ui.deleteBucketSuccess)
  .fail(ui.deleteBucketFailure);
};

const addBucketHandlers = () => {
  $('#create-bucket').on('submit', onCreateBucket);
  $('#update-bucket').on('submit', onUpdateBucket);
  $('#delete-bucket').on('click', onDeleteBucket);

  //click handler for show all user buckets
  //click handler for show currentUser's buckets
};
//
module.exports = {
  addBucketHandlers,
};
