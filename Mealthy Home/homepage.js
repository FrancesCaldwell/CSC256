// on window load initAll function
window.addEventListener("load", initAll, false);
var height;
// create empty reasons array
var reasons = [];
function initAll() {
  // on window load,
  // an event listener is added to the form to listen for changes in the form
  // such as answer selections and button presses
  document
    .getElementById("quizForm")
    .addEventListener("submit", nextQuestion, false);
}

// slideIndex
let slideIndex = 1;
// call showSlides function with slideIndex
showSlides(slideIndex);

// currentSlide index
function currentSlide(n) {
  // call showSlides function with slideIndex
  showSlides((slideIndex = n));
}

// showSlides function
function showSlides(n) {
  // declare variables
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  // depending on which slide dot is clicked on
  // show corresponding image
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var expanded = false;

// shows checkboxes when clicking select option
function showCheckboxes() {
  var allergyCheckboxes = document.getElementById("allergyCheckboxes");
  var medicalCheckboxes = document.getElementById("medicalCheckboxes");
  var dietCheckboxes = document.getElementById("dietCheckboxes");

  if (!expanded) {
    allergyCheckboxes.style.display = "block";
    medicalCheckboxes.style.display = "block";
    dietCheckboxes.style.display = "block";

    expanded = true;
  } else {
    allergyCheckboxes.style.display = "none";
    medicalCheckboxes.style.display = "none";
    dietCheckboxes.style.display = "none";

    expanded = false;
  }
}

// my update height function that updates the height of the user to switch between different metric systems
function updateHeight() {
  // store the input elements in variables
  var feetInput = document.getElementById("feetInput");
  var inchesInput = document.getElementById("inchesInput");
  var metersInput = document.getElementById("metersInput");

  // get the input element's values
  var feet = Number(feetInput.value);
  var inches = Number(inchesInput.value);
  var meters = Number(metersInput.value);

  // depending on which unit they choose, the math will calculate what height they arein both metrics
  switch (document.getElementById("select-height").selectedIndex) {
    case 0:
      // they must select a unit
      return alert("Please select unit");
      break;
    case 1:
      // Convert feet and inches to meters
      meters = (feet + inches / 12) / 3.281;
      metersInput.value = meters.toFixed(2);
      // show feet and inches input elements, hide meters input elements
      feetInput.disabled = false;
      inchesInput.disabled = false;
      metersInput.disabled = true;
      feetInput.style.display = "block";
      inchesInput.style.display = "block";
      metersInput.style.display = "none";
      // update input names
      feetInput.name = "feet";
      inchesInput.name = "inches";
      metersInput.name = "";
      break;
    case 2:
      // Convert meters to feet and inches
      feet = Math.floor(meters * 3.281);
      inches = Math.round((meters * 3.281 - feet) * 12);
      feetInput.value = feet;
      inchesInput.value = inches;
      // Show meters input element, hide feet and inches input elements
      feetInput.disabled = true;
      inchesInput.disabled = true;
      metersInput.disabled = false;
      feetInput.style.display = "none";
      inchesInput.style.display = "none";
      metersInput.style.display = "block";
      // update input names
      feetInput.name = "";
      inchesInput.name = "";
      metersInput.name = "meters";
      break;
    case 3:
      //...
      break;
  }
  // Update height variable
  height = feet + " ft " + inches + " in, " + meters.toFixed(2) + " m";
}

// function that changes the quiz questions and answers
// stores the user's options
function nextQuestion(evt) {
  // grab and store the quizQuestions
  var ol = document.getElementById("quizQuestions");

  // select the list items
  var questionList = ol.getElementsByTagName("li");

  // get the index of the current question
  var currentIndex = Array.from(questionList).findIndex(
    (li) => li.style.display !== "none"
  );
  // check if any unanswered questions
  var unanswered = false;
  var currentQuestion = questionList[currentIndex];
  var inputs = currentQuestion.querySelectorAll(
    "input[type='radio'], input[type='checkbox'], input[type='number'], input[type='range']"
  );
  for (var i = 0; i < inputs.length; i++) {
    // if the input type is checkbox or radio, check if they're checked
    // if the user hasn't selected a option, unanswered is true
    if (inputs[i].type === "checkbox" || inputs[i].type === "radio") {
      if (inputs[i].checked) {
        unanswered = false;
        break;
      } else {
        unanswered = true;
      }
      // if the input type is number, check if the value is zero
      // if the user hasn't entered a number and the value is zero, unanswered is true
      // otherwise, if the value has changed to the user inputted number, unanswered is false
    } else if (inputs[i].type === "number") {
      if (inputs[i].value == 0) {
        unanswered = true;
        break;
      } else {
        unanswered = false;
      }
    }
  }
  // if the question is unanswered, alert the user to answer the question before proceeding to the next one
  if (unanswered) {
    alert("Please answer the question before proceeding to the next one.");
    // keep the user on the same question if they try proceeding without answering the question
    if (currentIndex !== 0) {
      currentIndex--;
    }
  }
  // array goes through the whole quiz by identifying the button click
  if (currentIndex == 0) {
    questionList[0].style.display = "none";
    questionList[1].style.display = "block";

    document.getElementById("next").innerHTML = "CONTINUE →";
  } else if (currentIndex == 1) {
    // Question 1
    questionList[0].style.display = "none";
    questionList[1].style.display = "none";
    questionList[2].style.display = "block";

    // access to elements
    var reasonCheckboxValues =
      document.getElementsByClassName("reasonCheckbox");
    // collects the reasons they chose into reasons array
    for (var i = 0; i < reasonCheckboxValues.length; i++) {
      var checkbox = reasonCheckboxValues[i];
      if (checkbox.checked) reasons += checkbox.value + " ";
    }
    // an alert showing what the array contains
    // the array contains the reasons people selected
    //alert(reasons);
  } else if (currentIndex == 2) {
    // Question 2
    questionList[0].style.display = "none";
    questionList[1].style.display = "none";
    questionList[2].style.display = "none";
    questionList[3].style.display = "block";

    // create empty allergies array
    allergies = [];
    // access to elements
    yesAllergy = document.getElementById("yesAllergy");
    allergyCheckbox = document.getElementsByClassName("allergyCheckbox");
    // if the user checked yes for having allergies
    // the allergies they selected will be collected into the array
    if (yesAllergy.checked) {
      for (var i = 0; i < allergyCheckbox.length; i++) {
        var checkbox = allergyCheckbox[i];
        if (checkbox.checked) allergies += checkbox.value + " ";
      }
    } else {
      // if the user selects no for if they have allergies and intolerances or not
      // the allergies array will just store text saying that the user has no allergies or intolerances
      allergies = "no allergies or intolerances";
    }
    // an alert showing what the array contains
    // the allergies array contains the allergies and intolerances the user has
    // if the user chose no, the array will indicate that the user has no allergies or intolerances
    //alert(allergies);
  } else if (currentIndex == 3) {
    // Question 3
    questionList[0].style.display = "none";
    questionList[1].style.display = "none";
    questionList[2].style.display = "none";
    questionList[3].style.display = "none";
    questionList[4].style.display = "block";

    // create empty medicalConditions array
    medicalConditions = [];
    // create empty diets array
    diets = [];
    // access to elements
    yesDiet = document.getElementById("yesDiet");
    medicalCheckbox = document.getElementsByClassName("medicalCheckbox");
    dietCheckbox = document.getElementsByClassName("dietCheckbox");
    // if the user checked yes for having allergies
    // the allergies they selected will be collected into the array
    if (yesDiet.checked) {
      for (var i = 0; i < medicalCheckbox.length; i++) {
        var checkbox = medicalCheckbox[i];
        if (checkbox.checked) medicalConditions += checkbox.value + " ";
      }
      for (var i = 0; i < dietCheckbox.length; i++) {
        var checkbox = dietCheckbox[i];
        if (checkbox.checked) medicalConditions += checkbox.value + " ";
      }
    } else {
      // if the user selects no for if they have allergies or not
      // the medicalConditions array will just store text saying that the user has no medical conditions
      medicalConditions = "no medical conditions";
      // the diets conditions array will just store text saying that the user has no dietary restrictions
      diets = "no dietary restrictions";
    }
    // an alert showing what the arrays contains
    // the arrays contains the dietary restrictions or medical conditions the user has
    // if the user chose no, the array will indicate that the user has no dietary restrictions or medical conditions
    //alert(medicalConditions + diets);
  } else if (currentIndex == 4) {
    // Question 4
    questionList[0].style.display = "none";
    questionList[1].style.display = "none";
    questionList[2].style.display = "none";
    questionList[3].style.display = "none";
    questionList[4].style.display = "none";
    questionList[5].style.display = "block";

    // create empty plantbased array
    plantbased = [];
    // access to elements
    yesPlantbased = document.getElementById("yesPlantbased");
    plantbasedCheckbox = document.getElementsByClassName("plantbasedCheckbox");

    vegan = document.getElementById("vegan");
    vegetarian = document.getElementById("vegetarian");

    // if the user checked yes for following a plantbased diet
    // the diet they selected will be collected into the array
    if (yesPlantbased.checked) {
      if (vegan.checked) {
        plantbased = vegan.value;
      } else if (vegetarian.checked) {
        plantbased = vegetarian.value;
      } else {
        // don't let user continue to next page if they didn't select aeverything properly
        alert("user didn't select either");
      }
    } else {
      // if the user selects no for if they follow a plant-based diet or not
      // the allergies array will just store text saying that the user doesn't follow a plant-based diet
      plantbased = "doesn't follow a plant-based diet";
    }
    // an alert showing what the array contains
    // the plantbased array contains the plantbased diet the user has
    // if the user chose no, the array will indicate that the user doesn't follow a plant-based diet
    //alert(plantbased);
  } else if (currentIndex == 5) {
    // Question 5
    questionList[0].style.display = "none";
    questionList[1].style.display = "none";
    questionList[2].style.display = "none";
    questionList[3].style.display = "none";
    questionList[4].style.display = "none";
    questionList[5].style.display = "none";
    questionList[6].style.display = "block";

    // stores the excluded ingredients
    excludedIngredients = document.getElementById("excludedIngredients").value;

    // an alert showing what the user wants excluded from their meal plan
    //alert(excludedIngredients);
  } else if (currentIndex == 6) {
    // Question 6
    questionList[0].style.display = "none";
    questionList[1].style.display = "none";
    questionList[2].style.display = "none";
    questionList[3].style.display = "none";
    questionList[4].style.display = "none";
    questionList[5].style.display = "none";
    questionList[6].style.display = "none";
    questionList[7].style.display = "block";

    // access to elements
    mGender = document.getElementById("mGender");
    fGender = document.getElementById("fGender");
    naGender = document.getElementById("naGender");

    // the gender they selected will be collected into the array
    if (mGender.checked) {
      gender = mGender.value;
    } else if (fGender.checked) {
      gender = fGender.value;
    } else if (naGender.checked) {
      gender = naGender.value;
    } else {
      // don't let user continue to next page if they didn't select everything properly
      //alert("user didn't select either");
    }
    // shows the user's gender
    //alert(gender);

    // Question 7
    // event listener to identify the input and convert the unit of weight measurement selected
    document.getElementById("input").addEventListener("input", function (e) {
      var input = e.target.value;
      switch (document.getElementById("select-weight").selectedIndex) {
        case 0:
          return alert("Please select unit");
          break;
        case 1:
          var pounds = input;
          var kg = input / 2.2046;
          break;
        case 2:
          var pounds = input * 0.0022046;
          var kg = pounds / 2.2046;
          break;
        case 3:
          //...
          break;
      }

      document.getElementById("poundsOutput").value = pounds;
      document.getElementById("kgOutput").value = kg;
      weight = pounds + " lb, " + kg + " kg";
    });
  } else if (currentIndex == 7) {
    // Question 8
    questionList[0].style.display = "none";
    questionList[1].style.display = "none";
    questionList[2].style.display = "none";
    questionList[3].style.display = "none";
    questionList[4].style.display = "none";
    questionList[5].style.display = "none";
    questionList[6].style.display = "none";
    questionList[7].style.display = "none";
    questionList[8].style.display = "block";

    // alerts user weight
    //alert(weight);

    // event listener to change the display based on the user's selection
    document
      .getElementById("select-height")
      .addEventListener("change", updateHeight);
    // event listeners to grab the users input and calculate their height in feet/inches and meters/centimeters
    document
      .getElementById("feetInput")
      .addEventListener("input", updateHeight);
    document
      .getElementById("inchesInput")
      .addEventListener("input", updateHeight);
    document
      .getElementById("metersInput")
      .addEventListener("input", updateHeight);
  } else if (currentIndex == 8) {
    // Question 9
    questionList[0].style.display = "none";
    questionList[1].style.display = "none";
    questionList[2].style.display = "none";
    questionList[3].style.display = "none";
    questionList[4].style.display = "none";
    questionList[5].style.display = "none";
    questionList[6].style.display = "none";
    questionList[7].style.display = "none";
    questionList[8].style.display = "none";
    questionList[9].style.display = "block";

    // alerts user height
    //alert(height);

    // Question 10
    var slider = document.getElementById("myRange");
    var output = document.getElementById("age");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
      output.innerHTML = this.value;
      age = this.value;
    };
  } else if (currentIndex == 9) {
    // Results
    questionList[0].style.display = "none";
    questionList[1].style.display = "none";
    questionList[2].style.display = "none";
    questionList[3].style.display = "none";
    questionList[4].style.display = "none";
    questionList[5].style.display = "none";
    questionList[6].style.display = "none";
    questionList[7].style.display = "none";
    questionList[8].style.display = "none";
    questionList[9].style.display = "none";
    questionList[10].style.display = "block";

    // will display age selected from last question
    //alert(age);

    document.getElementById("next").style.display = "none";

    // sums up users choices
    alert(
      reasons +
        ", " +
        allergies +
        ", " +
        medicalConditions +
        diets +
        ", " +
        plantbased +
        ", " +
        gender +
        ", " +
        excludedIngredients +
        ", " +
        weight +
        ", " +
        height +
        ", " +
        age
    );
  } else {
  }
  evt.preventDefault();
}
