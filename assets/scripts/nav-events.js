'use strict';

const showCreateProfile = (event) => {
  event.preventDefault();
  $('.create-profile').show();
};

const navHandlers = () => {
$('#create-profile-nav').on('click', showCreateProfile);
};

module.exports = {
  navHandlers,
};
