// when the window loads, run the initAll function
window.onload = initAll;

// Using JavaScript to open the page in fullscreen mode
/**
 * Toggle fullscreen function who work with webkit and firefox.
 * @function toggleFullscreen
 * @param {Object} event
 */
function toggleFullscreen(event) {
  var element = document.body;

  if (event instanceof HTMLElement) {
    element = event;
  }

  var isFullscreen =
    document.webkitIsFullScreen || document.mozFullScreen || false;

  element.requestFullScreen =
    element.requestFullScreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    function () {
      return false;
    };
  document.cancelFullScreen =
    document.cancelFullScreen ||
    document.webkitCancelFullScreen ||
    document.mozCancelFullScreen ||
    function () {
      return false;
    };

  isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
}

// the usedNums array is an array containing 76 objects
var usedNums = new Array(76);
// initAll is a function that holds all of the main functionality within the bingo page
// this is created to let the user get another bing card without having to reload the page
// it's functionalities include:
// - if your browser supports the script, create a new card for the user
// - if the user presses the "click here" button, they get another bingo card
// - if the user's browser doesn't support the script, tell them their browser doesn't support the script
function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    document.getElementById("RNG").onclick = anotherNum;
    newCard();
  } else {
    // alerts the user and displays this string of text if their browser doesn't support the script
    alert("Sorry, your browser doesnt support this script.");
  }
}

var uniqueRands = [];
var numRands = 76;
function anotherNum() {
  // refill the array if needed
  if (!uniqueRands.length) {
    for (var i = 0; i < numRands; i++) {
      uniqueRands.push(i);
    }
  }
  var index = Math.floor(Math.random() * uniqueRands.length);
  var val = uniqueRands[index];

  // now remove that value from the array
  uniqueRands.splice(index, 1);

  document.getElementById("randNum").innerHTML = val;
}

// the newCard function iterates the setSquare function 24 times to fill in all 24 squares in the bingo card
function newCard() {
  if (document.getElementById) {
    for (var i = 0; i < 24; i++) {
      setSquare(i);
    }
  }
}

// this function sets the random number within each square
// it takes into account the ranges of each column
function setSquare(thisSquare) {
  // this is the current square that is being worked in
  // the thisSquare variable stores a string of the square that is currently being worked on
  // the currsquare variable is equal to the string "square" plus the concatenated number next to the "square" text
  // so if we're working in the table data with an id of square5,
  // then currSquare = "square" + 5; or "currSquare = "square5";
  var currSquare = "square" + thisSquare;
  // colPlace is an array of numbers representing the column place that the currentSquare is in
  // The square can be within any of the three columns: B, I, N, G, and O.
  // B=0, I=1, N=2, G=3, O=4
  // They are seperated by column so that each number in each column reaches a number within the column's corresponding range
  // B: 1-15, I: 16-30, N: 31-45, G: 46-60, O: 61-75
  var colPlace = new Array(
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4
  );
  // the colBasis variable contains the column place (0,1,2,3,4) times 15
  var colBasis = colPlace[thisSquare] * 15;
  // declare the newNum variable
  var newNum;
  // calculates the new number
  do {
    // in the newNum variable, the column basis is added to the random number
    // the + 1 is just to make it so that the first number in the limitation can be 1 rather than 0.
    newNum = colBasis + getNewNum() + 1;
    // calculates the new number until usedNums[newNum] = false
    // calculates basically until the newNumber is not in the used numbers array
  } while (usedNums[newNum]);
  // if the new number is not in the used numbers array, set it to true and display the number on the card
  // if it is in the used numbers array (already true), don't do anything
  usedNums[newNum] = true;
  // gets the current square by id so square5, square 21, etc. and sets it equal to the newNum variable
  // ultimately, displaying the calculation for each square
  document.getElementById(currSquare).innerHTML = newNum;
  // gives the current square a class attribute of an empty string
  document.getElementById(currSquare).className = "";
  // toggles the color of the current square when the user presses it
  document.getElementById(currSquare).onmousedown = toggleColor;
}

// this function randomly generates a number between 1 and 14.
function getNewNum() {
  return Math.floor(Math.random() * 15);
}

// this function changes the random numbers on the bingo board for the player
function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    // sets all of the numbers in the usedNums array to false
    // so that they can be reused again
    usedNums[i] = false;
    document
      .getElementById("free")
      .style.setProperty("background-color", "#FBDDE3", "important");
    let count = 1;
    const button = document.getElementById("reload");
    const textHolder = document.getElementById("roundNum");
    textHolder.innerHTML = "Round " + count;

    button.addEventListener("click", function () {
      textHolder.innerHTML = "Round " + ++count;
    });
  }
  // calls the newCard function to generate a new card
  newCard();
  // returns false so that the browser won't try to load the page
  return false;
}

function toggleColor(evt) {
  // identifies browser and looks at the property
  if (evt) {
    var thisSquare = evt.target;
  } else {
    var thisSquare = window.event.srcElement;
  }
  // checks to see if the class attribute of the clicked square has a value
  // if it doesn't we give it the pickedBG
  if (thisSquare.className == "") {
    // the pickedBG gives the interacted squares, the same background color as the free spot
    thisSquare.className = "pickedBG";
  } else {
    // this takes away the styling of the background color of the square
    thisSquare.className = "";
  }
  // anytime the user toggles a square, they're winning/losing status changes
  // this function checks whether the user is winning everytime a square is toggled
  checkWin();
}

// checks to see if the user has won
function checkWin() {
  // the winningOption variable stores which of the winning options the user has chosen
  var winningOption = -1;
  // the setSquares variable stores each square that the user has chosen
  var setSquares = 0;
  // the winners array contains an array of encoded values of a possible winning line
  var winningLines = new Array(
    31,
    992,
    15360,
    507904,
    541729,
    557328,
    1083458,
    2162820,
    4329736,
    8519745,
    8659472,
    16252928
  );

  // checks whether each square on the card has been clicked or not (24 times)
  for (var i = 0; i < 24; i++) {
    var currSquare = "square" + i;
    // if the attribute is empty, the square hasn't been clicked
    if (document.getElementById(currSquare).className != "") {
      // if the square has been clicked and does have a class attribute
      // make sure the square is set to the pickedBG attribute
      document.getElementById(currSquare).className = "pickedBG";
      // also set the new variable(setSquares) to a number based on each possible state of the card using bitwise arithmetic
      // the single bar does a bitwise or of setSquares and the number 2^i which is the result of Math.pow(2, i)
      // which is 2^0 is 1, 2^1 is 2, 2^2 is 4, and so on.
      // Or'ing each of these numbers together results in variable storing of about 16 million possible states it's in
      setSquares = setSquares | Math.pow(2, i);
    }
  }
  // in a traditional game of Bingo, there are 12 winning states
  // this for loop iterates 12 times going from (0, 11), since there are 12 objects within the array
  for (var i = 0; i < winningLines.length; i++) {
    // this if statement compares each winning state with the current state
    // looks for true values for each square in both of the two
    // as long as the one of the winning states, matches with numbers within the current state, the user wins
    if ((winningLines[i] & setSquares) == winningLines[i]) {
      // if the user wins, we set the winningOption to i, the pattern the user matched
      winningOption = i;
      //alert(setSquares);
    }
  }
  // if the winning option is a greater number than -1, the winning status of the player is confirmed
  if (winningOption > -1) {
    // if the user has won, loop through each square and check to see if it's found in the winning pattern.
    for (var i = 0; i < 24; i++) {
      if (winningLines[winningOption] & Math.pow(2, i)) {
        // if it is found in the winning pattern, set the class attribute to winningBG
        currSquare = "square" + i;
        // makes all of the winning squares the winningbg color
        document.getElementById(currSquare).className = "winningBG";
        // checks if the free square is within the winning line
        // if it is, it turns the square to the winning background color
        // if it isn't, the square stays the same color
        if (
          winningLines[winningOption] == winningLines[2] ||
          winningLines[winningOption] == winningLines[5] ||
          winningLines[winningOption] == winningLines[7] ||
          winningLines[winningOption] == winningLines[9]
        ) {
          document
            .getElementById("free")
            .style.setProperty("background-color", "#f8f1cc", "important");
        }
      }
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
