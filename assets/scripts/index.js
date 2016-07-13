'use strict';

const authEvents = require('./auth/events.js');
const homePageEvents = require('./homepage-events.js');


// On document ready
$(() => {
 authEvents.addHandlers();
 homePageEvents.homePageHandlers();
 $(".hide-nav").hide();
});
