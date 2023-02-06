function displayText(majorText, emailText, gradyearText) {
  document.getElementById(majorText).innerHTML =
    "Artificial Intelligence and Advanced  Computer Science";
  document.getElementById(emailText).innerHTML = "fracaldw@uat.edu";
  document.getElementById(gradyearText).innerHTML = "SUMMER 2023";
}

function PlaySound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}
