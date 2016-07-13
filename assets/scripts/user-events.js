'use strict';

const userEventHandlers = () => {
  $(".change-password").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
  });
  $(".change-password").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });
};

module.exports = {
  userEventHandlers
};
