var timeDisplayEl = $('#currentDay');
var saveBtn = $('.saveBtn');
var timers = $('.description');

console.log(timers);


function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
};

function setClasses() {
  // var currentHour = moment().format('H');
  var currentHour = 11;
  for (let i = 0; i < timers.length; i++) {
    console.log(currentHour, timers[i].dataset.hour);
    if (Number(currentHour) > Number(timers[i].dataset.hour)) {
      timers[i].classList.add('past');
    } else if (Number(currentHour) < Number(timers[i].dataset.hour)) {
      timers[i].classList.add('future');
    } else {
      timers[i].classList.add('present');
    }
  }
};


setClasses();


saveBtn.click(function () {


});

setInterval(displayTime, 1000);

// 1. Loop thru timeblocks
// 2. Inside that loop compare to current hour
// 3. Key has to be unique like dataset