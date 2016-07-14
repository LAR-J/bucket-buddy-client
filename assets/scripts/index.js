'use strict';

const authEvents = require('./auth/events.js');
const homePageEvents = require('./homepage-events.js');
const profileEvents = require('./profile/profile-events.js');

// On document ready
$(() => {
 authEvents.addHandlers();
 homePageEvents.homePageHandlers();
 profileEvents.addProfileHandlers();

//hides functionality that should only be shown upon login
 $(".hide-nav").hide();
});
