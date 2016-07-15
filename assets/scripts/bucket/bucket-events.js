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
};

const onCreateBucket = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
//  console.log(data);
  data.bucket.tags = data.bucket.tags.split(',');
  console.log(data.bucket.tags);
  api.createBucket(data)
  .then(ui.createBucketSuccess)
  .then(onUserBuckets)
  .catch(error => console.error(error))
};

const onShowBucket = () => {
  return api.showBucket()
    .then(ui.showBucketSuccess)
    .catch(error => console.error(error))
};

const onUserBuckets = () => {
  return api.showUserBuckets()
    .then(ui.showUserBucketsSuccess)
    .then(() => {
      $('.delete-bucket-button').on('click', onDeleteBucket);
      $('.edit-bucket-button').on('click', onEditBucket);
    })
    .catch(error => console.error(error))
};

const onAllUserBuckets = () => {
  return api.showAllUserBuckets()
    .then(ui.showAllBucketsSuccess)
    .catch(error => console.error(error))
};

const onUpdateBucket = (event) => {
  event.preventDefault();
  let buttonId = $(event.target).find('.save-bucket-button').attr('data-id');
  console.log(buttonId);
  let data = getFormFields(event.target);
  api.updateBucket(data, buttonId)
  .then(ui.updateBucketSuccess)
  .then(onUserBuckets)
  .catch(error => console.error(error))
};

const onEditBucket = (event) => {
    event.preventDefault();
    let buttonId = $(event.target).attr('data-id');
    console.log(buttonId);
    api.showBucket(buttonId)  //send buttonID for get request
    .then(ui.showBucketSuccess)
    .then(() => {
      $("#submit-bucket-edits").on("submit", onUpdateBucket)
    })
    .catch(error => console.error(error))
};

const onDeleteBucket = (event) => {
  event.preventDefault();
  let buttonId = $(event.target).attr('data-id');
  api.deleteBucket(buttonId)
  .then(ui.deleteBucketSuccess)
  .then(onUserBuckets)
  .catch(error => console.error(error))
};

// Hide users' buckets when navigating to different tabs

const hideUsersBuckets = () => {

};



const addBucketHandlers = () => {
  $('#create-bucket-form').on('submit', onCreateBucket);
  $('#open-my-buckets').on('click', bucketPageHandlers);
  $('#open-my-buckets').on('click', onUserBuckets);
  $('#view-all-user-buckets').on('click', onAllUserBuckets);
};
//
module.exports = {
  addBucketHandlers,
};
