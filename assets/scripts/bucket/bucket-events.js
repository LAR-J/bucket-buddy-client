'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./bucket-api');
const ui = require('./bucket-ui');

const bucketPageHandlers = () => {
  $("#create-new-bucket").show();
  $(".modal-fullscreen.create-bucket").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
  });
$(".modal-fullscreen.create-bucket").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });
}

const onCreateBucket = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
//  console.log(data);
  data.bucket.tags = data.bucket.tags.split(',');
  console.log(data.bucket.tags);
  api.createBucket(data)
  .then(ui.createBucketSuccess)
  .catch(error => console.error(error))
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
  $('#create-bucket-form').on('submit', onCreateBucket);
  $('#update-bucket').on('submit', onUpdateBucket);
  $('#delete-bucket').on('click', onDeleteBucket);
  $('#open-my-buckets').on('click', bucketPageHandlers);
  //click handler for show all user buckets
  //click handler for show currentUser's buckets
};
//
module.exports = {
  addBucketHandlers,
};
