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

const hideHomePageHandler = () => {
  $('.hide-homescreen').hide();
};


module.exports = {
  homePageHandlers,
  hideHomePageHandler
};
