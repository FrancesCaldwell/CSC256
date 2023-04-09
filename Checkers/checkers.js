// an array that hold the default layout of the pieces on the checkerboard
board = [
  [null, "w", null, "w", null, "w", null, "w"],
  ["w", null, "w", null, "w", null, "w", null],
  [null, "w", null, "w", null, "w", null, "w"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["b", null, "b", null, "b", null, "b", null],
  [null, "b", null, "b", null, "b", null, "b"],
  ["b", null, "b", null, "b", null, "b", null],
];

// creates checkerboard
function checkerBoard() {
  // store checkers element in chessboard variable
  var checkerboard = document.createElement("section");
  // sets the id of the board to checkers
  checkerboard.id = "checkers";
  // adds the board to the body of the hmtl page
  document.body.appendChild(checkerboard);

  // makes 64 squares
  // creates each row
  for (var i = 0; i < 8; i++) {
    // creates each column
    for (var j = 0; j < 8; j++) {
      // creates new element and stores it in chessSquare variable
      var square = document.createElement("div");
      // assign class name to squares
      square.classList.add("square");
      square.setAttribute("id", "div" + i + j);
      // every other square is darker pink
      if ((i + j) % 2 == 1) {
        // makes the background-color of the piece dark pink
        square.classList.add("darkPink");
        // adds an event listener for a mouse click on the square
        // calls the movePiece function
        square.addEventListener("click", movePiece);
      }
      // add squares to board
      checkerboard.appendChild(square);

      // if the value of the board[i][j] is not null, create the piece
      if (board[i][j]) {
        // creates pice: pass in the piece id, the class for whether the piece is
        // dark pink or white, the id of the square so a piece can be added to it
        createPiece("piece" + i + j, "checker-" + board[i][j], square);
      }
    }
  }
}

// this is a pointer to the HTML element that stores the id of the pice that was clicked on
// this is the piece that will be moved to a new square
const selValueElem = document.querySelector("#selectedSquare");

// function that creates the checkers piece
// it will be a heart, either white or dark pink
function createPiece(id, pieceClass, theSquare) {
  // creates a new div
  var newPiece = document.createElement("div");
  // sets the id so the piece can be accessed later
  newPiece.setAttribute("id", id);
  // this creates a heart piece
  newPiece.classList.add("checker");
  // this determines the color of the piece
  newPiece.classList.add(pieceClass);
  // the add event listener listens for a mouse click when the piece is clicked on
  // it calls the getPlayerPieces function to store the selected piece id
  newPiece.addEventListener("click", getPlayerPieces);
  // adds the piece to the square
  theSquare.appendChild(newPiece);
}

// gets the id of the piece that was selected and stores it
// in the selectedSquare hidden span
function getPlayerPieces() {
  // writes the selected piece id to the log to see what was clicked
  console.log("piece selected=", event.target.id);
  // piece selector
  // the id of the piece
  var selectedPieceId = event.target.id;
  // removes the word piece
  selectedPieceId = selectedPieceId.replace("piece", "");
  // stores the piece id in the span
  selValueElem.dataset.value = selectedPieceId;
}

// moves the piece to a new square
function movePiece() {
  // writes the selected square id (of the new square) to the log to see what was clicked
  console.log("square selected=", event.target.id);
  // square selector
  // the new square that was clicked
  var newSquareId = event.target.id;
  // removes the div and piece prefix to get only the number of the square
  newSquareId = newSquareId.replace("div", "");
  newSquareId = newSquareId.replace("piece", "");

  // gets the selected checkers piece id from the hidden span
  var selectedPieceId = selValueElem.dataset.value;

  // if a different piece was clicked, then run the code to move the piece
  if (selectedPieceId != newSquareId) {
    // the old square
    var oldSquare = document.getElementById("div" + selectedPieceId);
    // the old piece
    var oldPiece = document.getElementById("piece" + selectedPieceId);
    // the class that determines if this is a white or dark pink piece
    // it's tracked so the new piece has the same color as the old piece
    var pieceClass = oldPiece.classList[1];

    // removes the original piece from the board
    oldSquare.removeChild(oldPiece);

    // a pointer to the square where the piece is going to be moved to
    var newSquare = document.getElementById("div" + newSquareId);

    //creates the piece in the new square with the piece id, same color as the old piece
    // places it in the destination square
    createPiece("piece" + newSquareId, pieceClass, newSquare);

    // removes the old piece from the hidden span
    selValueElem.dataset.value = "";
  }
}
