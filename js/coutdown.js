// Set the date we're counting down to
var countDownDate = new Date("Oct 18, 2021 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = "0" + days;
  document.getElementById("hour").innerHTML =
    ((hours - (hours % 10)) / 10 == 0 ? "0" : "") + hours;
  document.getElementById("minu").innerHTML =
    ((minutes - (minutes % 10)) / 10 == 0 ? "0" : "") + minutes;
  document.getElementById("seco").innerHTML =
    ((seconds - (seconds % 10)) / 10 == 0 ? "0" : "") + seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
