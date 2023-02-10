function loadCrosswordPuzzle() {
  // a variable that stores the puzzle id to be referred to throughout the rest of the program
  var table = document.getElementById("puzzle");
  // Array with all flower names
  var arrWords = new Array(
    "dahlia",
    "lilac",
    "azalea",
    "rose",
    "aster",
    "tulip",
    "daffodil",
    "iris",
    "bloom",
    "snowdrop",
    "freesia",
    "poppy",
    "daisy",
    "camellia",
    "flower",
    "bluebell",
    "pancy",
    "crocus",
    "peony",
    "primrose",
    "blossom"
  );

  // -- Display words in each white part of the puzzle
  // for loop is used to print each letter according to the length of the word
  // horizontal words move using the tr variable that indicates their position horizontally
  // they also move with the cell variable to the right depending on their position in the puzzle
  // vertical words move using the trow variable which indicates where the word is positioned moving right in the puzzle
  // they also move up or down with the cell variable

  // ** Horizontal Words **
  // row 2
  var trR2 = table.rows[1];
  // Dahlia
  for (var i = 0; i < arrWords[0].length; i++) {
    var cell = trR2.cells[i];
    cell.innerText = arrWords[0][i];
  }
  // Lilac
  for (var i = 0; i < arrWords[1].length; i++) {
    var cell = trR2.cells[i + 7];
    cell.innerText = arrWords[1][i];
  }
  // row 4
  var trR4 = table.rows[3];
  // Azalea
  for (var i = 0; i < arrWords[2].length; i++) {
    var cell = trR4.cells[i + 3];
    cell.innerText = arrWords[2][i];
  }
  // Rose
  for (var i = 0; i < arrWords[3].length; i++) {
    var cell = trR4.cells[i + 10];
    cell.innerText = arrWords[3][i];
  }
  // row 6
  var trR6 = table.rows[5];
  // Aster
  for (var i = 0; i < arrWords[4].length; i++) {
    var cell = trR6.cells[i + 4];
    cell.innerText = arrWords[4][i];
  }
  // Tulip
  for (var i = 0; i < arrWords[5].length; i++) {
    var cell = trR6.cells[i + 10];
    cell.innerText = arrWords[5][i];
  }
  // row 8
  var trR8 = table.rows[7];
  // Tulip
  for (var i = 0; i < arrWords[6].length; i++) {
    var cell = trR8.cells[i];
    cell.innerText = arrWords[6][i];
  }
  // Iris
  for (var i = 0; i < arrWords[7].length; i++) {
    var cell = trR8.cells[i + 14];
    cell.innerText = arrWords[7][i];
  }
  // row 9
  var trR9 = table.rows[8];
  // Bloom
  for (var i = 0; i < arrWords[8].length; i++) {
    var cell = trR9.cells[i + 10];
    cell.innerText = arrWords[8][i];
  }
  // row 11
  var trR11 = table.rows[10];
  // Snowdrip
  for (var i = 0; i < arrWords[9].length; i++) {
    var cell = trR11.cells[i];
    cell.innerText = arrWords[9][i];
  }
  // row 12
  var trR12 = table.rows[11];
  // Freesia
  for (var i = 0; i < arrWords[10].length; i++) {
    var cell = trR12.cells[i + 10];
    cell.innerText = arrWords[10][i];
  }
  // row 15
  var trR15 = table.rows[14];
  // Poppy
  for (var i = 0; i < arrWords[11].length; i++) {
    var cell = trR15.cells[i + 3];
    cell.innerText = arrWords[11][i];
  }

  // ** Vertical Words **
  // Daisy
  for (var i = 0; i < arrWords[12].length; i++) {
    var trow = table.rows[i + 7];
    var cell = trow.cells[0];
    cell.innerText = arrWords[12][i];
  }
  // Camellia
  for (var i = 0; i < arrWords[13].length; i++) {
    var trow = table.rows[i];
    var cell = trow.cells[1];
    cell.innerText = arrWords[13][i];
  }
  // Flower
  for (var i = 0; i < arrWords[14].length; i++) {
    var trow = table.rows[i + 7];
    var cell = trow.cells[3];
    cell.innerText = arrWords[14][i];
  }
  // Bluebell
  for (var i = 0; i < arrWords[15].length; i++) {
    var trow = table.rows[i];
    var cell = trow.cells[7];
    cell.innerText = arrWords[15][i];
  }
  // Pancy
  for (var i = 0; i < arrWords[16].length; i++) {
    var trow = table.rows[i + 10];
    var cell = trow.cells[7];
    cell.innerText = arrWords[16][i];
  }
  // Crocus
  for (var i = 0; i < arrWords[17].length; i++) {
    var trow = table.rows[i + 1];
    var cell = trow.cells[11];
    cell.innerText = arrWords[17][i];
  }
  // Peony
  for (var i = 0; i < arrWords[18].length; i++) {
    var trow = table.rows[i + 10];
    var cell = trow.cells[12];
    cell.innerText = arrWords[18][i];
  }
  // Primrose
  for (var i = 0; i < arrWords[19].length; i++) {
    var trow = table.rows[i + 5];
    var cell = trow.cells[14];
    cell.innerText = arrWords[19][i];
  }
  // Blossom
  for (var i = 0; i < arrWords[20].length; i++) {
    var trow = table.rows[i + 3];
    var cell = trow.cells[17];
    cell.innerText = arrWords[20][i];
  }
}
