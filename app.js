let hoursElement = document.getElementById('hours');
let minsElement = document.getElementById('mins');
let secsElement = document.getElementById('secs');
let title = document.querySelector('title');

//////////

function stopWatch() {
  let hours = 0;
  let mins = 0;
  let secs = 0;

  let blah = setInterval(() => {
    // console.log(`${hours}h ${mins}m ${secs}s`);
    title.innerHTML = `${hours}H ${mins}M ${secs}S`;

    hoursElement.innerHTML = `${hours}H`;
    minsElement.innerHTML = `${mins}M`;
    secsElement.innerHTML = `${secs}S`;

    secs++;

    if (secs === 60) {
      mins++;
      secs = 0;
    }

    if (mins === 60) {
      hours++;
      mins = 0;
    }
  }, 1000);

  return function stopStopWatch() {
    hoursElement.innerHTML = `${hours}H`;
    minsElement.innerHTML = `${mins}M`;
    secsElement.innerHTML = `${secs}S`;
    clearInterval(blah);
  };
}

let stopTime = stopWatch();
