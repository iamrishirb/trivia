$( document ).ready(function() {
    startTimerAndProgressbar();
});

var timer = null;
var timePassed;
var TIME_LIMIT;
var timeLeft;


function startTimerAndProgressbar() {
    timePassed = 0;
    TIME_LIMIT = 15;
    timeLeft = TIME_LIMIT;
    
    startTimer();
    initializeProgressBar()
    startProgressBar()
}

function pauseTimerAndProgressbar() {
    clearInterval(timer);
    pauseProgressBar();
    id("pause-btn").disabled = true;
    id("resume-btn").disabled = false;
}

function resumeTimerAndProgressbar() {
    startTimer();
    resumeProgressBar();
    id("pause-btn").disabled = false;
    id("resume-btn").disabled = true;
}


/* HELPER FUNCTION */
function id(id) {
    return document.getElementById(id);
}

/* PROGRESS BAR */
function initializeProgressBar() {
    resetProgressBar();
    id("progress-bar").style.visibility = "visible";
    id("progress-bar-inner").style.animationDuration = TIME_LIMIT + "s";
    id("progress-bar-inner").style.animationPlayState = "paused";
}

function startProgressBar() {
    id("progress-bar-inner").style.animationPlayState = 'running';
}

function pauseProgressBar() {
    id("progress-bar-inner").style.animationPlayState = 'paused';
}

function resumeProgressBar() {
    id("progress-bar-inner").style.animationPlayState = 'running';
}

function initializeProgressBar() {
    resetProgressBar();
    id("progress-bar").style.visibility = "visible";
    id("progress-bar-inner").style.animationDuration = TIME_LIMIT + "s";
    id("progress-bar-inner").style.animationPlayState = "paused";
}

function resetProgressBar() {
    var element = id('progress-bar-inner');
    element.style.animation = 'none';
    element.offsetHeight; /* trigger a DOM reflow */
    element.style.animation = null;
}


/* TIMER */
function startTimer() {
    id("timer").textContent = formatTime(timeLeft);
    timer = setInterval(function() {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        id("timer").textContent = formatTime(timeLeft);
        if (timeLeft == 0) { clearTimeout(timer); }
    }, 1000);
}

function formatTime(time) {
    var m = Math.floor(time / 60);
    var s = time % 60;
    m = (m < 10) ? ("0" + m) : m;
    s = (s < 10) ? ("0" + s) : s;
    return `${m}:${s}`;
}

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
    pauseTimerAndProgressbar();
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    buyPillModal.style.display = "none";
    resumeTimerAndProgressbar();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == buyPillModal) {
    buyPillModal.style.display = "none";
    resumeTimerAndProgressbar();
  }
}

