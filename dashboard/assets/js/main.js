//On clicking any option card
$("#options").on('click', '.answer-card', function () {
    $("#options .answer-card.selected").removeClass("selected");
    $("#options .answer-card").addClass("disabled");
    // adding classname 'selected' to current click li 
    $(this).removeClass("disabled");
    $(this).addClass("selected");
});


// Get the modal
var buyPillModal = document.getElementById("buyPill");

// Get the button that opens the modal
var buyPillButton = document.getElementById("buyPillButton");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
buyPillButton.onclick = function() {
    buyPillModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    buyPillModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == buyPillModal) {
    buyPillModal.style.display = "none";
  }
}

//code for rounded timer
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

// const TIME_LIMIT = 20;
   // let timeLeft = TIME_LIMIT;
// let timerInterval = null;
// let remainingPathColor = COLOR_CODES.info.color;

window.onload = () => {
  let hour = 0;
  let minute = 0;
  let seconds = 0;
  let totalSeconds = 0;

  let intervalId = null;
  
  intervalId = setInterval(startTimer, 1000);
    function startTimer() {
      ++totalSeconds;
      // hour = Math.floor(totalSeconds / 3600);
      minute = Math.floor((totalSeconds - hour * 3600) / 60);
      seconds = totalSeconds - (hour * 3600 + minute * 60);
  
      // document.getElementById("hour").innerHTML = hour;
      document.getElementById("minute").innerHTML = minute;
      document.getElementById("seconds").innerHTML = seconds;
    }
  
    document.getElementById('Displplaytimetaken').addEventListener('click', () => {
      document.getElementById("timetaken").innerHTML = minute + "minutes" + seconds + "seconds";
      reset();
    });
  
    function reset() {
      totalSeconds = 0;
      // document.getElementById("hour").innerHTML = '00';
      document.getElementById("minute").innerHTML = '00';
      document.getElementById("seconds").innerHTML = '00';
    } 
}