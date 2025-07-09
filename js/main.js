// main.js - Cleaned up and valid JavaScript only
// Adds 'is-loaded' class to wallpaper and picture image when loaded

document.addEventListener('DOMContentLoaded', function() {
  // Wallpaper background image loader
  var wallpaper = document.querySelector('.wallpaper');
  if (wallpaper && wallpaper.dataset.image) {
    var img = new Image();
    img.src = wallpaper.dataset.image;
    img.onload = function() {
      wallpaper.classList.add('is-loaded');
    };
    img.onerror = function() {
      console.warn('Wallpaper image failed to load:', img.src);
    };
  }

  // Profile picture image loader
  var pictureImage = document.getElementById('pictureImage');
  if (pictureImage) {
    if (pictureImage.complete) {
      pictureImage.classList.add('is-loaded');
    } else {
      pictureImage.addEventListener('load', function() {
        pictureImage.classList.add('is-loaded');
      });
      pictureImage.addEventListener('error', function() {
        console.warn('Profile image failed to load:', pictureImage.src);
      });
    }
  }
});

