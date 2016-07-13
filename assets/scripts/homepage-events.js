'use strict';

const homePageHandlers = () => {
  $(".modal-fullscreen.sign-up").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
  });
  $(".modal-fullscreen.sign-up").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });

  $(".modal-fullscreen.sign-in").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
  });
  $(".modal-fullscreen.sign-in").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });
};

const hideHomePage = () => {
  $(".hide-homescreen").hide();
};

const displayHomePage = () => {
  $(".display-homescreen").show();
};

const displayNav = () => {
  $(".display-nav").show();
};

const hideNav = () => {
  $(".hide-nav").hide();
};

module.exports = {
  homePageHandlers,
  hideHomePage,
  displayHomePage,
  displayNav,
  hideNav
};
