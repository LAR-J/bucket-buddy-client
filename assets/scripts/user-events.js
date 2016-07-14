'use strict';

const userEventHandlers = () => {
  $(".change-password").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
  });
  $(".change-password").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    $('.change-password').find("input[type=password]").val('');
  });
  $(".create-profile").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
  });
  $(".create-profile").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    $('.create-profile').find("input", "textarea", "select").val('');
  });
  $(".update-profile").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
  });
  $(".update-profile").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    $('.update-profile').find("input", "textarea", "select").val('');
  });
};

module.exports = {
  userEventHandlers
};
