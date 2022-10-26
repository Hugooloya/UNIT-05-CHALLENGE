var timeDisplayEl = $('#currentDay');
var saveBtn = $('.saveBtn');
var timers = $('.description');
var testTesty = $('#user-task');


// This function displays current time in the header
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
};


// This function set specific classes according to the current time
function setClasses() {
  // var currentHour = moment().format('H');
  var currentHour = 12;
  for (let i = 0; i < timers.length; i++) {
    if (Number(currentHour) > Number(timers[i].dataset.hour)) {
      timers[i].classList.add('past');
    } else if (Number(currentHour) < Number(timers[i].dataset.hour)) {
      timers[i].classList.add('future');
    } else {
      timers[i].classList.add('present');
    }
  }
};




var masterBtn = $('.table');
masterBtn.click(function (event) {
  var clickedItem = event.target.id;
  if (clickedItem === "nine") {
    var userTask = $('.description').val();
    var userDesc = userTask.trim();
    localStorage.setItem(JSON.stringify(timers[0].dataset.hour), JSON.stringify(userDesc));
    printTask();
  }
});

function printTask() {
  var userDescription = localStorage.getItem(JSON.stringify(timers[0].dataset.hour));
  if (userDescription !== null) $('.description').val(userDescription);
  console.log(userDescription);
}



setInterval(displayTime, 1000);


// The init() function fires when the page is loaded 
// function init() {
  setClasses();
// }
// init();



// 3. Key has to be unique like dataset