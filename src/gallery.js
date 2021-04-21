let itemtiles = document.getElementsByClassName('itemtile-body');

// Generating a Ribbon for each tile ==> should be each ads (exclude tiles that are not an ad)
for (let tile of itemtiles) {
  let fraudRibbon = document.createElement('div');
  fraudRibbon.className = 'fraud-ribbon';

  let fraudProbability = document.createElement('span');
  fraudProbability.className = 'fraud-probability';

  fraudRibbon.appendChild(fraudProbability);
  tile.appendChild(fraudRibbon);
}

// Mocking the probability
let mockProb = document.getElementsByClassName('fraud-probability');
for (let x of mockProb) {
  let ran = Math.round(Math.random() * 100);
  x.innerHTML = 'Scam: ' + ran + '%';
  x.setAttribute('fraud-probability', ran);
}

// Grabbing all the spans with fraud-probability
let fraudProbabilities = document.getElementsByClassName('fraud-probability');

// Assigning background-color class to the ribbons based on the probability in the spans
for (let fraudProbability of fraudProbabilities) {
  if (fraudProbability.getAttribute('fraud-probability') < 19) {
    fraudProbability.parentElement.classList.add('green');
  } else if (
    fraudProbability.getAttribute('fraud-probability') < 30 &&
    fraudProbability.getAttribute('fraud-probability') > 19
  ) {
    fraudProbability.parentElement.classList.add('yellow');
  } else if (
    fraudProbability.getAttribute('fraud-probability') < 59 &&
    fraudProbability.getAttribute('fraud-probability') > 30
  ) {
    fraudProbability.parentElement.classList.add('orange');
  } else {
    fraudProbability.parentElement.classList.add('red');
  }
}

// Remove probabilities on ads that dont have a price
for (let item of itemtiles) {
  if (item.childElementCount === 3) {
    item.removeChild(item.lastChild);
  }
}
