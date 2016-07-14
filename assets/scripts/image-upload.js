'use strict';

const profile = require('./profile/profile-events');
const bucket = require('');

const uploadImage = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://localhost:3000/uploads',
      method: "POST",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data,
      contentType: false,
      processData: false,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const onUploadProfilePic = (event) => {
  let data = new FormData(event.target);

  return uploadImage(data)
  .then((response) => {
    let data.profile.profilePicture = response.link//????????
    profile.updateProfilePic(data)
  })
  .catch(error => console.error(error))
};

const onUploadBucketPic = (event) => {
  let data = new FormData(event.target);

  return uploadImage(data)
  .then(profile.updateBucketPic)
  .catch(error => console.error(error))
};
