var timeDisplayEl = $("#currentDay");
var saveBtn = $('button[type="submit"]');
var timers = $(".description");
var allInputs = $("input");
var calendar = {};

// This function displays current time in the header
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

// This function set specific classes according to the current time
function setClasses() {
  // var currentHour = moment().format("H");
  var currentHour = 12;
  for (let i = 0; i < timers.length; i++) {
    if (Number(currentHour) > Number(timers[i].dataset.hour)) {
      timers[i].classList.add("past");
    } else if (Number(currentHour) < Number(timers[i].dataset.hour)) {
      timers[i].classList.add("future");
    } else {
      timers[i].classList.add("present");
    }
  }
}

function saveLastTask(event) {
  var inputEl = $(`input[name="${event.target.id}"]`);
  calendar = {
    ...calendar,
    [event.target.id]: inputEl.val(),
  };
  localStorage.setItem("calendar", JSON.stringify(calendar));
}

function renderLastTask(lastTask) {
  $.each(lastTask, function (key, value) {
    $(`input[name="${key}"]`).val(value);
  });
}


saveBtn.click(function (event) {
  event.preventDefault();
  saveLastTask(event);
});

setInterval(displayTime, 1000);

// The init() function fires when the page is loaded
function init() {
  setClasses();
  var lastTask = JSON.parse(localStorage.getItem("calendar"));
  if (lastTask) {
    renderLastTask(lastTask);
    calendar = lastTask;
  }
}

init();
