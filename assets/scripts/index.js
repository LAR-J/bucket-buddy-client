'use strict';

const authEvents = require('./auth/events.js');
const homePageEvents = require('./homepage-events.js');
const bucketEvents = require('./bucket/bucket-events.js');
const userEvents = require('./user-events.js');
const profileEvents = require('./profile/profile-events.js');

// On document ready
$(() => {
// event handlers
 authEvents.addHandlers();
 homePageEvents.homePageHandlers();
 bucketEvents.addBucketHandlers();
 userEvents.userEventHandlers();
 profileEvents.addProfileHandlers();

 // auto hide elements on page ready
  $(".hide-nav").hide();
  $("#create-new-bucket").hide();
});
