'use strict';

const authEvents = require('./auth/events.js');
const homePageEvents = require('./homepage-events.js');
const userEvents = require('./user-events.js');


// On document ready
$(() => {
 authEvents.addHandlers();
 homePageEvents.homePageHandlers();
 userEvents.userEventHandlers();
 $(".hide-nav").hide();
});
