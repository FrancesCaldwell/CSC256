// Global variable containing initial titles of each movie
var title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  title9,
  title10,
  title11,
  title12,
  title13,
  title14,
  title15,
  title16,
  title17,
  title18,
  title19,
  title20,
  title21,
  title22,
  title23,
  title24,
  title25,
  title26,
  title27,
  title28,
  title29,
  title30;
// Constant global array declared
const libList = new Array();
// This function closes the pop-up when the button is pressed
function closeButton() {
  // Hides pop-up
  document.getElementById("pop-up").style.visibility = "hidden";
  // Clears pop-up text
  document.getElementById("pop-up").innerHTML = "";
}
// Depending on the array element name, the respective movie title will appear with the respective textarea
// Everytime a respective movie title is changed, the changed name is stored within a variable
document.onclick = function (event) {
  // Defines the item that the user clicks
  if (event === undefined) event = window.event;
  var target = "target" in event ? event.target : event.srcElement;

  if (target.innerHTML == "🕮 Library 🕮") {
    // If the item the user clicks is called "🕮 Library 🕮", keep the film title, "Film Title"
    document.getElementById("filmTitle").innerHTML = "Film Title";
  } else if (target.innerHTML == libList[0]) {
    // If the item the user clicks is the same as the first array item, change the film title to the first array item name and review1's textarea
    title1 = document.getElementById("filmTitle").innerHTML = libList[0];
    selectTab(1);
  } else if (target.innerHTML == libList[1]) {
    // If the item the user clicks is the same as the second array item, change the film title to the second array item name and review2's textarea
    title2 = document.getElementById("filmTitle").innerHTML = libList[1];
    selectTab(2);
  } else if (target.innerHTML == libList[2]) {
    // If the item the user clicks is the same as the third array item, change the film title to the third array item name and review3's textarea
    title3 = document.getElementById("filmTitle").innerHTML = libList[2];
    selectTab(3);
  } else if (target.innerHTML == libList[3]) {
    // If the item the user clicks is the same as the fourth array item, change the film title to the fourth array item name and review4's textarea
    title4 = document.getElementById("filmTitle").innerHTML = libList[3];
    selectTab(4);
  } else if (target.innerHTML == libList[4]) {
    // If the item the user clicks is the same as the fifth array item, change the film title to the fifth array item name and review5's textarea
    title5 = document.getElementById("filmTitle").innerHTML = libList[4];
    selectTab(5);
  } else if (target.innerHTML == libList[5]) {
    // If the item the user clicks is the same as the sixth array item, change the film title to the sixth array item name and review6's textarea
    title6 = document.getElementById("filmTitle").innerHTML = libList[5];
    selectTab(6);
  } else if (target.innerHTML == libList[6]) {
    // If the item the user clicks is the same as the seventh array item, change the film title to the seventh array item name and review7's textarea
    title7 = document.getElementById("filmTitle").innerHTML = libList[6];
    selectTab(7);
  } else if (target.innerHTML == libList[7]) {
    // If the item the user clicks is the same as the eigth array item, change the film title to the eigth array item name and review8's textarea
    title8 = document.getElementById("filmTitle").innerHTML = libList[7];
    selectTab(8);
  } else if (target.innerHTML == libList[8]) {
    // If the item the user clicks is the same as the ninth array item, change the film title to the ninth array item name and review9's textarea
    title9 = document.getElementById("filmTitle").innerHTML = libList[8];
    selectTab(9);
  } else if (target.innerHTML == libList[9]) {
    // If the item the user clicks is the same as the tenth array item, change the film title to the tenth array item name and review10's textarea
    title10 = document.getElementById("filmTitle").innerHTML = libList[9];
    selectTab(10);
  } else if (target.innerHTML == libList[10]) {
    // If the item the user clicks is the same as the eleventh array item, change the film title to the eleventh array item name and review11's textarea
    title11 = document.getElementById("filmTitle").innerHTML = libList[10];
    selectTab(11);
  } else if (target.innerHTML == libList[11]) {
    // If the item the user clicks is the same as the twelfth array item, change the film title to the twelfth array item name and review12's textarea
    title12 = document.getElementById("filmTitle").innerHTML = libList[11];
    selectTab(12);
  } else if (target.innerHTML == libList[12]) {
    // If the item the user clicks is the same as the thirteenth array item, change the film title to the thirteenth array item name and review13's textarea
    title13 = document.getElementById("filmTitle").innerHTML = libList[12];
    selectTab(13);
  } else if (target.innerHTML == libList[13]) {
    // If the item the user clicks is the same as the fourteenth array item, change the film title to the fourteenth array item name and review14's textarea
    title14 = document.getElementById("filmTitle").innerHTML = libList[13];
    selectTab(14);
  } else if (target.innerHTML == libList[14]) {
    // If the item the user clicks is the same as the fifteenth array item, change the film title to the fifteenth array item name and review15's textarea
    title15 = document.getElementById("filmTitle").innerHTML = libList[14];
    selectTab(15);
  } else if (target.innerHTML == libList[15]) {
    // If the item the user clicks is the same as the sixteenth array item, change the film title to the sixteenth array item name and review16's textarea
    title16 = document.getElementById("filmTitle").innerHTML = libList[15];
    selectTab(16);
  } else if (target.innerHTML == libList[16]) {
    // If the item the user clicks is the same as the seventeenth array item, change the film title to the seventeenth array item name and review17's textarea
    title17 = document.getElementById("filmTitle").innerHTML = libList[16];
    selectTab(17);
  } else if (target.innerHTML == libList[17]) {
    // If the item the user clicks is the same as the eighteenth array item, change the film title to the eighteenth array item name and review18's textarea
    title18 = document.getElementById("filmTitle").innerHTML = libList[17];
    selectTab(18);
  } else if (target.innerHTML == libList[18]) {
    // If the item the user clicks is the same as the nineteenth array item, change the film title to the nineteenth array item name and review19's textarea
    title19 = document.getElementById("filmTitle").innerHTML = libList[18];
    selectTab(19);
  } else if (target.innerHTML == libList[19]) {
    // If the item the user clicks is the same as the twentieth array item, change the film title to the twentieth array item name and review20's textarea
    title20 = document.getElementById("filmTitle").innerHTML = libList[19];
    selectTab(20);
  } else if (target.innerHTML == libList[20]) {
    // If the item the user clicks is the same as the twenty-first array item, change the film title to the twenty-first array item name and review21's textarea
    title21 = document.getElementById("filmTitle").innerHTML = libList[20];
    selectTab(21);
  } else if (target.innerHTML == libList[21]) {
    // If the item the user clicks is the same as the twenty-second array item, change the film title to the twenty-second array item name and review22's textarea
    title22 = document.getElementById("filmTitle").innerHTML = libList[21];
    selectTab(22);
  } else if (target.innerHTML == libList[22]) {
    // If the item the user clicks is the same as the twenty-third array item, change the film title to the twenty-third array item name and review23's textarea
    title23 = document.getElementById("filmTitle").innerHTML = libList[22];
    selectTab(23);
  } else if (target.innerHTML == libList[23]) {
    // If the item the user clicks is the same as the twenty-fourth array item, change the film title to the twenty-fourth array item name and review24's textarea
    title24 = document.getElementById("filmTitle").innerHTML = libList[23];
    selectTab(24);
  } else if (target.innerHTML == libList[24]) {
    // If the item the user clicks is the same as the twenty-fifth array item, change the film title to the twenty-fifth array item name and review25's textarea
    title25 = document.getElementById("filmTitle").innerHTML = libList[24];
    selectTab(25);
  } else if (target.innerHTML == libList[25]) {
    // If the item the user clicks is the same as the twenty-sixth array item, change the film title to the twenty-sixth array item name and review26's textarea
    title26 = document.getElementById("filmTitle").innerHTML = libList[25];
    selectTab(26);
  } else if (target.innerHTML == libList[26]) {
    // If the item the user clicks is the same as the twenty-seventh array item, change the film title to the twenty-seventh array item name and review27's textarea
    title27 = document.getElementById("filmTitle").innerHTML = libList[26];
    selectTab(27);
  } else if (target.innerHTML == libList[27]) {
    // If the item the user clicks is the same as the twenty-eigth array item, change the film title to the eighth array item name and review28's textarea
    title28 = document.getElementById("filmTitle").innerHTML = libList[27];
    selectTab(28);
  } else if (target.innerHTML == libList[28]) {
    // If the item the user clicks is the same as the twenty-ninth array item, change the film title to the ninth array item name and review29's textarea
    title29 = document.getElementById("filmTitle").innerHTML = libList[28];
    selectTab(29);
  } else if (target.innerHTML == libList[29]) {
    // If the item the user clicks is the same as the thirtieth array item, change the film title to the thirtieth array item name and review30's textarea
    title30 = document.getElementById("filmTitle").innerHTML = libList[29];
    selectTab(30);
  }
};

// This function changes the movie title and saves it if the user double clicks the title after editing it
function changeTitle() {
  // If within the libList array, change the respective title name
  if (libList != -1) {
    // storing the movieList id within the ul variable
    var ul = document.getElementById("movieList");
    // storing the a tag within the a variable
    var a = ul.getElementsByTagName("a");
    // if the array item is equal to the old movie title, change the array item and the film title to the newly inputted title name and assign it to a new variable
    // if statement covers title change x30 times
    if (libList[0] == title1) {
      var newTitle1 = document.getElementById("filmTitle").innerHTML;
      libList[0] = newTitle1;
      a[0].innerHTML = newTitle1;
    } else if (libList[1] == title2) {
      var newTitle2 = document.getElementById("filmTitle").innerHTML;
      libList[1] = newTitle2;
      a[1].innerHTML = newTitle2;
    } else if (libList[2] == title3) {
      var newTitle3 = document.getElementById("filmTitle").innerHTML;
      libList[2] = newTitle3;
      a[2].innerHTML = newTitle3;
    } else if (libList[3] == title4) {
      var newTitle4 = document.getElementById("filmTitle").innerHTML;
      libList[3] = newTitle4;
      a[3].innerHTML = newTitle4;
    } else if (libList[4] == title5) {
      var newTitle5 = document.getElementById("filmTitle").innerHTML;
      libList[4] = newTitle5;
      a[4].innerHTML = newTitle5;
    } else if (libList[5] == title6) {
      var newTitle6 = document.getElementById("filmTitle").innerHTML;
      libList[5] = newTitle6;
      a[5].innerHTML = newTitle6;
    } else if (libList[6] == title7) {
      var newTitle7 = document.getElementById("filmTitle").innerHTML;
      libList[6] = newTitle7;
      a[6].innerHTML = newTitle7;
    } else if (libList[7] == title8) {
      var newTitle8 = document.getElementById("filmTitle").innerHTML;
      libList[7] = newTitle8;
      a[7].innerHTML = newTitle8;
    } else if (libList[8] == title9) {
      var newTitle9 = document.getElementById("filmTitle").innerHTML;
      libList[8] = newTitle9;
      a[8].innerHTML = newTitle9;
    } else if (libList[9] == title10) {
      var newTitle10 = document.getElementById("filmTitle").innerHTML;
      libList[9] = newTitle10;
      a[9].innerHTML = newTitle10;
    } else if (libList[10] == title11) {
      var newTitle11 = document.getElementById("filmTitle").innerHTML;
      libList[10] = newTitle11;
      a[10].innerHTML = newTitle11;
    } else if (libList[11] == title12) {
      var newTitle12 = document.getElementById("filmTitle").innerHTML;
      libList[11] = newTitle12;
      a[11].innerHTML = newTitle12;
    } else if (libList[12] == title13) {
      var newTitle13 = document.getElementById("filmTitle").innerHTML;
      libList[12] = newTitle13;
      a[12].innerHTML = newTitle13;
    } else if (libList[13] == title14) {
      var newTitle14 = document.getElementById("filmTitle").innerHTML;
      libList[13] = newTitle14;
      a[13].innerHTML = newTitle14;
    } else if (libList[14] == title15) {
      var newTitle15 = document.getElementById("filmTitle").innerHTML;
      libList[14] = newTitle15;
      a[14].innerHTML = newTitle15;
    } else if (libList[15] == title16) {
      var newTitle16 = document.getElementById("filmTitle").innerHTML;
      libList[15] = newTitle16;
      a[15].innerHTML = newTitle16;
    } else if (libList[16] == title17) {
      var newTitle17 = document.getElementById("filmTitle").innerHTML;
      libList[16] = newTitle17;
      a[16].innerHTML = newTitle17;
    } else if (libList[17] == title18) {
      var newTitle18 = document.getElementById("filmTitle").innerHTML;
      libList[17] = newTitle18;
      a[17].innerHTML = newTitle18;
    } else if (libList[18] == title19) {
      var newTitle19 = document.getElementById("filmTitle").innerHTML;
      libList[18] = newTitle19;
      a[18].innerHTML = newTitle19;
    } else if (libList[19] == title20) {
      var newTitle20 = document.getElementById("filmTitle").innerHTML;
      libList[19] = newTitle20;
      a[19].innerHTML = newTitle20;
    } else if (libList[20] == title21) {
      var newTitle21 = document.getElementById("filmTitle").innerHTML;
      libList[20] = newTitle21;
      a[20].innerHTML = newTitle21;
    } else if (libList[21] == title22) {
      var newTitle22 = document.getElementById("filmTitle").innerHTML;
      libList[21] = newTitle22;
      a[21].innerHTML = newTitle22;
    } else if (libList[22] == title23) {
      var newTitle23 = document.getElementById("filmTitle").innerHTML;
      libList[22] = newTitle23;
      a[22].innerHTML = newTitle23;
    } else if (libList[23] == title24) {
      var newTitle24 = document.getElementById("filmTitle").innerHTML;
      libList[23] = newTitle24;
      a[23].innerHTML = newTitle24;
    } else if (libList[24] == title25) {
      var newTitle25 = document.getElementById("filmTitle").innerHTML;
      libList[24] = newTitle25;
      a[24].innerHTML = newTitle25;
    } else if (libList[25] == title26) {
      var newTitle26 = document.getElementById("filmTitle").innerHTML;
      libList[25] = newTitle26;
      a[25].innerHTML = newTitle26;
    } else if (libList[26] == title27) {
      var newTitle27 = document.getElementById("filmTitle").innerHTML;
      libList[26] = newTitle27;
      a[26].innerHTML = newTitle27;
    } else if (libList[27] == title28) {
      var newTitle28 = document.getElementById("filmTitle").innerHTML;
      libList[27] = newTitle28;
      a[27].innerHTML = newTitle28;
    } else if (libList[28] == title29) {
      var newTitle29 = document.getElementById("filmTitle").innerHTML;
      libList[28] = newTitle29;
      a[28].innerHTML = newTitle29;
    } else if (libList[29] == title30) {
      var newTitle30 = document.getElementById("filmTitle").innerHTML;
      libList[29] = newTitle30;
      a[29].innerHTML = newTitle30;
    } else {
      // if the array item is not equal to any previous titles, alert the user that they are unable to change the title name
      alert("Unable to change title name.");
    }
  }
}

function addMovie() {
  // store movie list id into library variable
  var library = document.getElementById("movieList");
  // store list item id into library variable
  var listItem = document.getElementById("searchTitle").value;
  //store creation of a element in variable
  var entry = document.createElement("a");
  entry.appendChild(document.createTextNode(listItem));
  // if library list length is less than 30, add title to library and change title name
  if (libList.length != 30) {
    library.appendChild(entry);
    libList.push(entry.innerHTML);
  }

  increment();
}

function selectTab(tabIndex) {
  //Hide All Tabs
  document.getElementById("review1").style.display = "none";
  document.getElementById("review2").style.display = "none";
  document.getElementById("review3").style.display = "none";
  document.getElementById("review4").style.display = "none";
  document.getElementById("review5").style.display = "none";
  document.getElementById("review6").style.display = "none";
  document.getElementById("review7").style.display = "none";
  document.getElementById("review8").style.display = "none";
  document.getElementById("review9").style.display = "none";
  document.getElementById("review10").style.display = "none";
  document.getElementById("review11").style.display = "none";
  document.getElementById("review12").style.display = "none";
  document.getElementById("review13").style.display = "none";
  document.getElementById("review14").style.display = "none";
  document.getElementById("review15").style.display = "none";
  document.getElementById("review16").style.display = "none";
  document.getElementById("review17").style.display = "none";
  document.getElementById("review18").style.display = "none";
  document.getElementById("review19").style.display = "none";
  document.getElementById("review20").style.display = "none";
  document.getElementById("review21").style.display = "none";
  document.getElementById("review22").style.display = "none";
  document.getElementById("review23").style.display = "none";
  document.getElementById("review24").style.display = "none";
  document.getElementById("review25").style.display = "none";
  document.getElementById("review26").style.display = "none";
  document.getElementById("review27").style.display = "none";
  document.getElementById("review28").style.display = "none";
  document.getElementById("review29").style.display = "none";
  document.getElementById("review30").style.display = "none";

  //Show the Selected Tab
  document.getElementById("review" + tabIndex).style.display = "block";
}

// Get progress, increment it if it's less than 99, and set the progress percentage
function getProgress() {
  var d = document.getElementById("progressbar").getAttribute("aria-valuenow");
  return d;
}
function setProgress(value) {
  document.getElementById("progressbar").setAttribute("aria-valuenow", value);
  document
    .getElementById("progressbar")
    .setAttribute("style", "width: " + value + "%;");
  document.getElementById("progressbar").innerHTML = value + "%";
}
function increment() {
  var i = getProgress();
  if (i < 99) {
    i = (parseFloat(i) + 3.33333333333).toFixed(3);
    setProgress(i);
  } else {
    document.getElementById("pop-up").style.visibility = "visible";
    document.getElementById("pop-up").innerHTML =
      "<h1>Congratulations! <br> You completed the 30-day challenge!</h1><button id='exit' onclick='closeButton()'>exit</button>";
  }
}
