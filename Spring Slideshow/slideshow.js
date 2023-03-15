// on window onload, run the rotate function
window.onload = rotate;

// theImage index is set to the first image in the array
var theImage = 0;
// the array of imaegs
var slideImages = new Array(
  "images/cherry-blossom.jpg",
  "images/lilac.jpg",
  "images/rhododendron.jpg",
  "images/saucer-magnolia.jpg",
  "images/tulips.jpg",
  "images/weigela.jpg",
  "images/wisteria.jpg"
);

function rotate() {
  // the if statement iterates through the images in the array
  theImage++;
  if (theImage == slideImages.length) {
    theImage = 0;
  }
  // this displays the image in the iteration
  // each image is displayed after a specific amount of time in seconds
  document.getElementById("slideshow").src = slideImages[theImage];
  setTimeout(rotate, 3 * 1000);
}
