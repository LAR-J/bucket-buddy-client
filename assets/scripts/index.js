'use strict';

const authEvents = require('./auth/events.js');
const homePageEvents = require('./homepage-events.js');
const profileEvents = require('./profile/profile-events.js');

// On document ready
$(() => {
 authEvents.addHandlers();
 homePageEvents.homePageHandlers();
 $(".hide-nav").hide();
 profileEvents.addProfileHandlers();
});
