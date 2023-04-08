// when the window loads, the initForm function is called
window.onload = initForm;
// constant global array declared which stores the dates that i've added data to
const mealDates = new Array();
// getting range of selected date/week
let week = [];

// increment calendar function
function incrementCalendar() {
  // stores the current-date element in a variable
  currentDate = document.querySelector(".current-date");
  // everytime the next icon is pressed, the currDate increments by 1
  ++currDate;

  // if the currDay is less than 6, increment the currDay by 1
  // otherwise, set the currDay to 0
  if (currDay < 6) {
    ++currDay;
  } else {
    currDay = 0;
  }
  // if the currMonth is equal to any of these numbers,
  if (
    currMonth == 1 ||
    currMonth == 3 ||
    currMonth == 5 ||
    currMonth == 7 ||
    currMonth == 8 ||
    currMonth == 10 ||
    currMonth == 12
  ) {
    // if the currDate is equal to the last day (ex, 31.) of the month, increment the month by 1 and set the currDate back to 0,
    // then increment the currDate by 1 everytime the next button is clicked
    if (currDate == 32) {
      ++currMonth;
      currDate = 0;
      ++currDate;
      // if the currMonth is equal to 13, set the currMonth to 0, increment the currMonth by 1, and increment the currYear by 1
      if (currMonth == 13) {
        currMonth = 0;
        ++currMonth;
        ++currYear;
      }
    }
    // if the currMonth is equal to any of these numbers,
  } else if (
    currMonth == 4 ||
    currMonth == 6 ||
    currMonth == 9 ||
    currMonth == 11
  ) {
    // if the currDate is equal to the last day (ex, 30.) of the month, increment the month by 1 and set the currDate back to 0,
    // then increment the currDate by 1 everytime the next button is clicked
    if (currDate == 31) {
      ++currMonth;
      currDate = 0;
      ++currDate;
      // if the currMonth is equal to 13, set the currMonth to 0, increment the currMonth by 1, and increment the currYear by 1
      if (currMonth == 13) {
        currMonth = 0;
        ++currMonth;
        ++currYear;
      }
    }
    // if the currMonth is equal to any of these numbers,
  } else if (currMonth == 2) {
    // if the currDate is equal to the last day (ex, 28.) of the month, increment the month by 1 and set the currDate back to 0,
    // then increment the currDate by 1 everytime the next button is clicked
    if (currDate == 29) {
      ++currMonth;
      currDate = 0;
      ++currDate;
      if (currMonth == 13) {
        currMonth = 0;
        ++currMonth;
        ++currYear;
      }
    }
  }
  // if the currDay equals (sunday, monday, etc.),
  // based on the currDay, highlight the currDay and keep the other colors as a separate color
  if (currDay == sunday) {
    document.getElementById("sunday").style.backgroundColor = "#959d80";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == monday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#959d80";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == tuesday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#959d80";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == wednesday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#959d80";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == thursday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#959d80";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == friday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#959d80";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == saturday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#959d80";
  }
  // change the currentDate innerText to the current date in month/date/year format
  currentDate.innerText = currMonth + "/" + currDate + "/" + currYear;

  // if the week array contains the innerHTML of the currentDate, show the breakfast, lunch, and dinner data for each day
  if (week.includes(currentDate.innerHTML)) {
    document.getElementById("sunBreakfast").style.color = "black";
    document.getElementById("sunLunch").style.color = "black";
    document.getElementById("sunDinner").style.color = "black";

    document.getElementById("monBreakfast").style.color = "black";
    document.getElementById("monLunch").style.color = "black";
    document.getElementById("monDinner").style.color = "black";

    document.getElementById("tueBreakfast").style.color = "black";
    document.getElementById("tueLunch").style.color = "black";
    document.getElementById("tueDinner").style.color = "black";

    document.getElementById("wedBreakfast").style.color = "black";
    document.getElementById("wedLunch").style.color = "black";
    document.getElementById("wedDinner").style.color = "black";

    document.getElementById("thuBreakfast").style.color = "black";
    document.getElementById("thuLunch").style.color = "black";
    document.getElementById("thuDinner").style.color = "black";

    document.getElementById("friBreakfast").style.color = "black";
    document.getElementById("friLunch").style.color = "black";
    document.getElementById("friDinner").style.color = "black";

    document.getElementById("satBreakfast").style.color = "black";
    document.getElementById("satLunch").style.color = "black";
    document.getElementById("satDinner").style.color = "black";
    // otherwise, hide the text of breakfast, lunch, and dinner data for each day
  } else {
    document.getElementById("sunBreakfast").style.color = "transparent";
    document.getElementById("sunLunch").style.color = "transparent";
    document.getElementById("sunDinner").style.color = "transparent";

    document.getElementById("monBreakfast").style.color = "transparent";
    document.getElementById("monLunch").style.color = "transparent";
    document.getElementById("monDinner").style.color = "transparent";

    document.getElementById("tueBreakfast").style.color = "transparent";
    document.getElementById("tueLunch").style.color = "transparent";
    document.getElementById("tueDinner").style.color = "transparent";

    document.getElementById("wedBreakfast").style.color = "transparent";
    document.getElementById("wedLunch").style.color = "transparent";
    document.getElementById("wedDinner").style.color = "transparent";

    document.getElementById("thuBreakfast").style.color = "transparent";
    document.getElementById("thuLunch").style.color = "transparent";
    document.getElementById("thuDinner").style.color = "transparent";

    document.getElementById("friBreakfast").style.color = "transparent";
    document.getElementById("friLunch").style.color = "transparent";
    document.getElementById("friDinner").style.color = "transparent";

    document.getElementById("satBreakfast").style.color = "transparent";
    document.getElementById("satLunch").style.color = "transparent";
    document.getElementById("satDinner").style.color = "transparent";
  }
}

function decrementCalendar() {
  // stores the current-date element in a variable
  currentDate = document.querySelector(".current-date");
  // everytime the next icon is pressed, the currDate decrements by 1
  --currDate;

  // if the currDay is less than or equal to 6 and is less than 0,
  // decrement the currDay by 1
  // if the currDay is less than or equal to 0, set the currDay to 7, and decrement the day by 1
  if (currDay <= 6 && currDay > 0) {
    --currDay;
  } else if (currDay <= 0) {
    currDay = 7;
    --currDay;
  }
  // if the currMonth is equal to any of these numbers,
  if (
    currMonth == 1 ||
    currMonth == 3 ||
    currMonth == 5 ||
    currMonth == 7 ||
    currMonth == 8 ||
    currMonth == 10 ||
    currMonth == 12
  ) {
    // if the currDate is equal to the last day (ex, 31.) of the month and is greater than 0,
    // decrement the month by 1 and set the currDate back to 0
    // then decrement the currDate by 1 everytime the next button is clicked
    if (currDate == 32 && currDay > 0) {
      --currMonth;
      currDate = 0;
      --currDate;
      // if the currMonth is equal to 13 and greater than 0, set the currMonth to 0
      // decrement the currMonth by 1, and decrement the currYear by 1
      if (currMonth == 13 && currMonth > 0) {
        currMonth = 0;
        --currMonth;
        --currYear;
        // if the currMonth is less than or equal to 1, set the currMonth to 13 and decrement the currMonth by 1
      } else if (currMonth <= 1) {
        currMonth = 13;
        --currMonth;
      }
      // if the currDate is less than or equal to 0, decrement the currMonth by 1,
      // set the currDate to 32, and decrement the currDate by 1 everytime the conditions are met
    } else if (currDate <= 0) {
      --currMonth;
      currDate = 32;
      --currDate;
    }
    // if the currMonth is equal to any of these numbers,
  } else if (
    currMonth == 4 ||
    currMonth == 6 ||
    currMonth == 9 ||
    currMonth == 11
  ) {
    // if the currDate is equal to the last day (ex, 30.) of the month and is greater than 0,
    // decrement the month by 1 and set the currDate back to 0
    if (currDate == 31 && currDay > 0) {
      --currMonth;
      currDate = 0;
      --currDate;
      // if the currMonth is equal to 13 and greater than 0, set the currMonth to 0
      // decrement the currMonth by 1, and decrement the currYear by 1
      if (currMonth == 13 && currMonth > 0) {
        currMonth = 0;
        --currMonth;
        --currYear;
        // if the currMonth is less than or equal to 1, set the currMonth to 13 and decrement the currMonth by 1
      } else if (currMonth <= 1) {
        currMonth = 13;
        --currMonth;
      }
      // if the currDate is less than or equal to 0, decrement the currMonth by 1,
      // set the currDate to 32, and decrement the currDate by 1 everytime the conditions are met
    } else if (currDate <= 0) {
      --currMonth;
      currDate = 32;
      --currDate;
    }
    // if the currMonth is equal to any of these numbers,
  } else if (currMonth == 2) {
    // if the currDate is equal to the last day (ex, 28.) of the month and is greater than 0,
    // decrement the month by 1 and set the currDate back to 0
    if (currDate == 29 && currDay > 0) {
      --currMonth;
      currDate = 0;
      --currDate;
      // if the currMonth is equal to 13 and greater than 0, set the currMonth to 0
      // decrement the currMonth by 1, and decrement the currYear by 1
      if (currMonth == 13 && currMonth > 0) {
        currMonth = 0;
        --currMonth;
        --currYear;
        // if the currMonth is less than or equal to 1, set the currMonth to 13 and decrement the currMonth by 1
      } else if (currMonth <= 1) {
        currMonth = 13;
        --currMonth;
      }
      // if the currDate is less than or equal to 0, decrement the currMonth by 1,
      // set the currDate to 32, and decrement the currDate by 1 everytime the conditions are met
    } else if (currDate <= 0) {
      --currMonth;
      currDate = 32;
      --currDate;
    }
  }
  // if the currDay equals (sunday, monday, etc.),
  // based on the currDay, highlight the currDay and keep the other colors as a separate color
  if (currDay == sunday) {
    document.getElementById("sunday").style.backgroundColor = "#959d80";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == monday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#959d80";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == tuesday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#959d80";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == wednesday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#959d80";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == thursday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#959d80";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == friday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#959d80";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == saturday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#959d80";
  }
  // change the currentDate innerText to the current date in month/date/year format
  currentDate.innerText = currMonth + "/" + currDate + "/" + currYear;

  // if the week array contains the innerHTML of the currentDate, show the breakfast, lunch, and dinner data for each day
  if (week.includes(currentDate.innerHTML)) {
    document.getElementById("sunBreakfast").style.color = "black";
    document.getElementById("sunLunch").style.color = "black";
    document.getElementById("sunDinner").style.color = "black";

    document.getElementById("monBreakfast").style.color = "black";
    document.getElementById("monLunch").style.color = "black";
    document.getElementById("monDinner").style.color = "black";

    document.getElementById("tueBreakfast").style.color = "black";
    document.getElementById("tueLunch").style.color = "black";
    document.getElementById("tueDinner").style.color = "black";

    document.getElementById("wedBreakfast").style.color = "black";
    document.getElementById("wedLunch").style.color = "black";
    document.getElementById("wedDinner").style.color = "black";

    document.getElementById("thuBreakfast").style.color = "black";
    document.getElementById("thuLunch").style.color = "black";
    document.getElementById("thuDinner").style.color = "black";

    document.getElementById("friBreakfast").style.color = "black";
    document.getElementById("friLunch").style.color = "black";
    document.getElementById("friDinner").style.color = "black";

    document.getElementById("satBreakfast").style.color = "black";
    document.getElementById("satLunch").style.color = "black";
    document.getElementById("satDinner").style.color = "black";
    // otherwise, hide the text of breakfast, lunch, and dinner data for each day
  } else {
    document.getElementById("sunBreakfast").style.color = "transparent";
    document.getElementById("sunLunch").style.color = "transparent";
    document.getElementById("sunDinner").style.color = "transparent";

    document.getElementById("monBreakfast").style.color = "transparent";
    document.getElementById("monLunch").style.color = "transparent";
    document.getElementById("monDinner").style.color = "transparent";

    document.getElementById("tueBreakfast").style.color = "transparent";
    document.getElementById("tueLunch").style.color = "transparent";
    document.getElementById("tueDinner").style.color = "transparent";

    document.getElementById("wedBreakfast").style.color = "transparent";
    document.getElementById("wedLunch").style.color = "transparent";
    document.getElementById("wedDinner").style.color = "transparent";

    document.getElementById("thuBreakfast").style.color = "transparent";
    document.getElementById("thuLunch").style.color = "transparent";
    document.getElementById("thuDinner").style.color = "transparent";

    document.getElementById("friBreakfast").style.color = "transparent";
    document.getElementById("friLunch").style.color = "transparent";
    document.getElementById("friDinner").style.color = "transparent";

    document.getElementById("satBreakfast").style.color = "transparent";
    document.getElementById("satLunch").style.color = "transparent";
    document.getElementById("satDinner").style.color = "transparent";
  }
}

// Function that runs when the window starts
function initForm() {
  // gets a new date
  let date = new Date();

  // gets current year, month, date, and day, and stores them in variables
  currYear = date.getFullYear();
  currMonth = date.getMonth() + 1;
  currDate = date.getDate();
  currDay = date.getDay();

  // get the months element
  // set the selectedIndex to 0
  // onchange, run the populateDays function
  document.getElementById("months").selectedIndex = 0;
  document.getElementById("months").onchange = populateDays;

  // store the innerText for each day into variables of their respective names
  sunday = document.getElementById("sunday").innerText;
  monday = document.getElementById("monday").innerText;
  tuesday = document.getElementById("tuesday").innerText;
  wednesday = document.getElementById("wednesday").innerText;
  thursday = document.getElementById("thursday").innerText;
  friday = document.getElementById("friday").innerText;
  saturday = document.getElementById("saturday").innerText;

  // assign each day humber corresponding with their index number
  sunday = 0;
  monday = 1;
  tuesday = 2;
  wednesday = 3;
  thursday = 4;
  friday = 5;
  saturday = 6;

  // if the currDay equals (sunday, monday, etc.)
  // based on the currDay, highlight the currDay and keep the other colors as a separate color
  if (currDay == sunday) {
    document.getElementById("sunday").style.backgroundColor = "#959d80";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == monday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#959d80";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == tuesday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#959d80";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == wednesday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#959d80";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == thursday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#959d80";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == friday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#959d80";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == saturday) {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#959d80";
  }
  // store the current-date element in the currentDate variable again
  currentDate = document.querySelector(".current-date");
  // change the currentDate innerText to the current date in month/date/year format
  currentDate.innerText = currMonth + "/" + currDate + "/" + currYear;
}

//populate days based on month function
function populateDays() {
  // array contains 12 values that correspond to the number of days in the respective month
  var monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  // get's the month the user picked from the menu and storign it in monthStr
  var monthStr = this.options[this.selectedIndex].value;

  // if monthStr is equal to nothing, than the user chose the word "Month" rather than a month name
  if (monthStr != "") {
    // if they do chose a month, monthStr is turned into a number
    var theMonth = parseInt(monthStr);
    // the day menu is changed bty setting it's options length to zero
    document.getElementById("days").options.length = 0;
    // the loop goes through the number of days in whatever month is chosen
    for (var i = 0; i < monthDays[theMonth]; i++) {
      // adding a new option to the menu for each day
      document.getElementById("days").options[i] = new Option(i + 1);
    }
  }
}

// pases the date passed into the function
function parseDate(input) {
  var parts = input.split("/");
  // Note: months are 0-based
  parsedDate = new Date(parts[2], parts[1] - 1, parts[0]);
  return parsedDate;
}

// gets the name of the day of the date
function getName(day) {
  if (day == 0) return "sunday";
  else if (day == 1) return "monday";
  else if (day == 2) return "tuesday";
  else if (day == 3) return "wednesday";
  else if (day == 4) return "thursday";
  else if (day == 5) return "friday";
  return "saturday";
}

// adds meals to the planner
function addMeal() {
  // add selected month and date to variables and store string date in variables
  var selectedMonth =
    document.getElementById("months").options[
      document.getElementById("months").selectedIndex
    ].value;
  var selectedDate =
    document.getElementById("days").options[
      document.getElementById("days").selectedIndex
    ].value;
  var newDate =
    selectedMonth.toString() + "/" + selectedDate.toString() + "/2023";

  var interpretedDate =
    selectedDate.toString() + "/" + selectedMonth.toString() + "/2023";

  // set the newDate to appear in the innerText of the currentDate heading element
  currentDate.innerText = newDate;
  // set the currMonth equal to the selectedMonth
  currMonth = selectedMonth;
  // set the currDate equal to the selectedDate
  currDate = selectedDate;
  // parse the date of the interpretedDate and store it into a variable, d
  var d = parseDate(interpretedDate);
  // create a new variable and set it equal to the date's day
  var weekday = d.getDay();
  // create a new variable to store the name of the weekday
  var weekdayName = getName(weekday);
  // set the currDay to the weekDay name
  currDay = weekdayName;

  // if the name of the currDay is equal to ("sunday", "monday", etc.)
  // based on the currDay, highlight the currDay and keep the other colors as a separate color
  if (currDay == "sunday") {
    document.getElementById("sunday").style.backgroundColor = "#959d80";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == "monday") {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#959d80";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == "tuesday") {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#959d80";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == "wednesday") {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#959d80";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == "thursday") {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#959d80";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == "friday") {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#959d80";
    document.getElementById("saturday").style.backgroundColor = "#757f5d";
  } else if (currDay == "saturday") {
    document.getElementById("sunday").style.backgroundColor = "#757f5d";
    document.getElementById("monday").style.backgroundColor = "#757f5d";
    document.getElementById("tuesday").style.backgroundColor = "#757f5d";
    document.getElementById("wednesday").style.backgroundColor = "#757f5d";
    document.getElementById("thursday").style.backgroundColor = "#757f5d";
    document.getElementById("friday").style.backgroundColor = "#757f5d";
    document.getElementById("saturday").style.backgroundColor = "#959d80";
  }

  // this for loop gets the week of the selected date
  for (let i = 0; i <= 6; i++) {
    let first = d.getDate() - d.getDay() + i;
    let day = new Date(parsedDate.setDate(first))
      .toLocaleDateString()
      .slice(0, 10);
    week.push(day);
  }

  // gets breakfast input
  var breakfast = document.getElementById("breakfast").value;
  // gets lunch input
  var lunch = document.getElementById("lunch").value;
  // gets dinner input
  var dinner = document.getElementById("dinner").value;
  // stores added dates to mealDates array, breakfast data, lunch data, and dinner data to array
  mealDates.push(newDate, breakfast, lunch, dinner);

  // if the name of the currDay is equal to ("sunday", "monday", etc.),
  if (currDay == "sunday") {
    // if the mealDates array and week array contain the newDate, make the user's input appear in the respective part of the table for sunday
    // otherwise (if both arrays don't contain the newDate), make the respective part of sunday's table column empty
    if (mealDates.includes(newDate) && week.includes(newDate)) {
      document.getElementById("sunBreakfast").innerHTML = breakfast;
      document.getElementById("sunLunch").innerHTML = lunch;
      document.getElementById("sunDinner").innerHTML = dinner;
    } else {
      document.getElementById("sunBreakfast").innerHTML = "";
      document.getElementById("sunLunch").innerHTML = "";
      document.getElementById("sunDinner").innerHTML = "";
    }
    // then set the currDay to 0
    currDay = 0;
    // if the name of the currDay is equal to ("sunday", "monday", etc.),
  } else if (currDay == "monday") {
    // if the mealDates array and week array contain the newDate, make the user's input appear in the respective part of the table for monday
    // otherwise (if both arrays don't contain the newDate), make the respective part of monday's table column empty
    if (mealDates.includes(newDate) && week.includes(newDate)) {
      document.getElementById("monBreakfast").innerHTML = breakfast;
      document.getElementById("monLunch").innerHTML = lunch;
      document.getElementById("monDinner").innerHTML = dinner;
    } else {
      document.getElementById("monBreakfast").innerHTML = "";
      document.getElementById("monLunch").innerHTML = "";
      document.getElementById("monDinner").innerHTML = "";
    }
    // then set the currDay to 1
    currDay = 1;
    // if the name of the currDay is equal to ("sunday", "monday", etc.),
  } else if (currDay == "tuesday") {
    // if the mealDates array and week array contain the newDate, make the user's input appear in the respective part of the table for tuesday
    // otherwise (if both arrays don't contain the newDate), make the respective part of tuesday's table column empty
    if (mealDates.includes(newDate) && week.includes(newDate)) {
      document.getElementById("tueBreakfast").innerHTML = breakfast;
      document.getElementById("tueLunch").innerHTML = lunch;
      document.getElementById("tueDinner").innerHTML = dinner;
    } else {
      document.getElementById("tueBreakfast").innerHTML = "";
      document.getElementById("tueLunch").innerHTML = "";
      document.getElementById("tueDinner").innerHTML = "";
    }
    // then set the currDay to 2
    currDay = 2;
    // if the name of the currDay is equal to ("sunday", "monday", etc.),
  } else if (currDay == "wednesday") {
    // if the mealDates array and week array contain the newDate, make the user's input appear in the respective part of the table for wednesday
    // otherwise (if both arrays don't contain the newDate), make the respective part of wednesday's table column empty
    if (mealDates.includes(newDate) && week.includes(newDate)) {
      document.getElementById("wedBreakfast").innerHTML = breakfast;
      document.getElementById("wedLunch").innerHTML = lunch;
      document.getElementById("wedDinner").innerHTML = dinner;
    } else {
      document.getElementById("wedBreakfast").innerHTML = "";
      document.getElementById("wedLunch").innerHTML = "";
      document.getElementById("wedDinner").innerHTML = "";
    }
    // then set the currDay to 3
    currDay = 3;
    // if the name of the currDay is equal to ("sunday", "monday", etc.),
  } else if (currDay == "thursday") {
    // if the mealDates array and week array contain the newDate, make the user's input appear in the respective part of the table for thursday
    // otherwise (if both arrays don't contain the newDate), make the respective part of thursday's table column empty
    if (mealDates.includes(newDate) && week.includes(newDate)) {
      document.getElementById("thuBreakfast").innerHTML = breakfast;
      document.getElementById("thuLunch").innerHTML = lunch;
      document.getElementById("thuDinner").innerHTML = dinner;
    } else {
      document.getElementById("thuBreakfast").innerHTML = "";
      document.getElementById("thuLunch").innerHTML = "";
      document.getElementById("thuDinner").innerHTML = "";
    }
    // then set the currDay to 4
    currDay = 4;
    // if the name of the currDay is equal to ("sunday", "monday", etc.),
  } else if (currDay == "friday") {
    // if the mealDates array and week array contain the newDate, make the user's input appear in the respective part of the table for friday
    // otherwise (if both arrays don't contain the newDate), make the respective part of friday's table column empty
    if (mealDates.includes(newDate) && week.includes(newDate)) {
      document.getElementById("friBreakfast").innerHTML = breakfast;
      document.getElementById("friLunch").innerHTML = lunch;
      document.getElementById("friDinner").innerHTML = dinner;
    } else {
      document.getElementById("friBreakfast").innerHTML = "";
      document.getElementById("friLunch").innerHTML = "";
      document.getElementById("friDinner").innerHTML = "";
    }
    // then set the currDay to 5
    currDay = 5;
    // if the name of the currDay is equal to ("sunday", "monday", etc.),
  } else if (currDay == "saturday") {
    // if the mealDates array and week array contain the newDate, make the user's input appear in the respective part of the table for saturday
    // otherwise (if both arrays don't contain the newDate), make the respective part of saturday's table column empty
    if (mealDates.includes(newDate) && week.includes(newDate)) {
      document.getElementById("satBreakfast").innerHTML = breakfast;
      document.getElementById("satLunch").innerHTML = lunch;
      document.getElementById("satDinner").innerHTML = dinner;
    } else {
      document.getElementById("satBreakfast").innerHTML = "";
      document.getElementById("satLunch").innerHTML = "";
      document.getElementById("satDinner").innerHTML = "";
    }
    // then set the currDay to 6
    currDay = 6;
  }

  // if the name of the currDay is equal to ("sunday", "monday", etc.)
  // based on the currDay, highlight the currDay and keep the other colors as a separate color
  if (week.includes(currentDate.innerHTML)) {
    document.getElementById("sunBreakfast").style.color = "black";
    document.getElementById("sunLunch").style.color = "black";
    document.getElementById("sunDinner").style.color = "black";

    document.getElementById("monBreakfast").style.color = "black";
    document.getElementById("monLunch").style.color = "black";
    document.getElementById("monDinner").style.color = "black";

    document.getElementById("tueBreakfast").style.color = "black";
    document.getElementById("tueLunch").style.color = "black";
    document.getElementById("tueDinner").style.color = "black";

    document.getElementById("wedBreakfast").style.color = "black";
    document.getElementById("wedLunch").style.color = "black";
    document.getElementById("wedDinner").style.color = "black";

    document.getElementById("thuBreakfast").style.color = "black";
    document.getElementById("thuLunch").style.color = "black";
    document.getElementById("thuDinner").style.color = "black";

    document.getElementById("friBreakfast").style.color = "black";
    document.getElementById("friLunch").style.color = "black";
    document.getElementById("friDinner").style.color = "black";

    document.getElementById("satBreakfast").style.color = "black";
    document.getElementById("satLunch").style.color = "black";
    document.getElementById("satDinner").style.color = "black";
    // otherwise, hide the text of breakfast, lunch, and dinner data for each day
  } else {
    document.getElementById("sunBreakfast").style.color = "transparent";
    document.getElementById("sunLunch").style.color = "transparent";
    document.getElementById("sunDinner").style.color = "transparent";

    document.getElementById("monBreakfast").style.color = "transparent";
    document.getElementById("monLunch").style.color = "transparent";
    document.getElementById("monDinner").style.color = "transparent";

    document.getElementById("tueBreakfast").style.color = "transparent";
    document.getElementById("tueLunch").style.color = "transparent";
    document.getElementById("tueDinner").style.color = "transparent";

    document.getElementById("wedBreakfast").style.color = "transparent";
    document.getElementById("wedLunch").style.color = "transparent";
    document.getElementById("wedDinner").style.color = "transparent";

    document.getElementById("thuBreakfast").style.color = "transparent";
    document.getElementById("thuLunch").style.color = "transparent";
    document.getElementById("thuDinner").style.color = "transparent";

    document.getElementById("friBreakfast").style.color = "transparent";
    document.getElementById("friLunch").style.color = "transparent";
    document.getElementById("friDinner").style.color = "transparent";

    document.getElementById("satBreakfast").style.color = "transparent";
    document.getElementById("satLunch").style.color = "transparent";
    document.getElementById("satDinner").style.color = "transparent";
  }
}
