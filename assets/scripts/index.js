'use strict';

const authEvents = require('./auth/events.js');
const homePageEvents = require('./homepage-events.js');
const bucketEvents = require('./bucket/events.js')


// On document ready
$(() => {
 authEvents.addHandlers();
 homePageEvents.homePageHandlers();
 bucketEvents.addBucketHandlers();
});
