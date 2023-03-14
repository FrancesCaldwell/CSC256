window.onload = rotate;

var theImage = 0;
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
  theImage++;
  if (theImage == slideImages.length) {
    theImage = 0;
  }
  document.getElementById("slideshow").src = slideImages[theImage];
  setTimeout(rotate, 3 * 1000);
}
