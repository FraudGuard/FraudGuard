let itemtiles = document.getElementsByClassName('itemtile-body');

// Generating a Ribbon for each tile ==> should be each ads (exclude tiles that are not an ad)
for (tile of itemtiles) {
  let fraudRibbon = document.createElement('div');
  fraudRibbon.className = 'fraud-ribbon';

  let fraudProbability = document.createElement('span');
  fraudProbability.className = 'fraud-probability';

  fraudRibbon.appendChild(fraudProbability);
  tile.appendChild(fraudRibbon);
}

// Mocking the probability
let mockData = document.getElementsByClassName('fraud-probability');
for (x of mockData) {
  let ran = Math.round(Math.random() * 100);
  x.innerHTML = ran;
  x.setAttribute('fraud-probability', ran);
}

// Grabbing all the spans with fraud-probability
let fraudProbabilities = document.getElementsByClassName('fraud-probability');

// Assigning background-color class to the ribbons based on the probability in the spans
for (fraudProbability of fraudProbabilities) {
  if (fraudProbability.innerHTML < 19) {
    fraudProbability.parentElement.classList.add('green');
    fraudProbability.parentElement.classList.add('green');
  } else if (
    fraudProbability.innerHTML < 30 &&
    fraudProbability.innerHTML > 19
  ) {
    fraudProbability.parentElement.classList.add('yellow');
    fraudProbability.parentElement.classList.add('yellow');
  } else if (
    fraudProbability.innerHTML < 59 &&
    fraudProbability.innerHTML > 30
  ) {
    fraudProbability.parentElement.classList.add('orange');
    fraudProbability.parentElement.classList.add('orange');
  } else {
    fraudProbability.parentElement.classList.add('red');
    fraudProbability.parentElement.classList.add('red');
  }
}
