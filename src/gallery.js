let itemtiles = document.getElementsByClassName('itemtile-body');

// Generating a Ribbon for each tile ==> should be each ads (exclude tiles that are not an ad)
for (const tile of itemtiles) {
  const fraudRibbon = document.createElement('div');
  fraudRibbon.className = 'fraud-ribbon';

  const fraudProbability = document.createElement('span');
  fraudProbability.className = 'fraud-probability';

  fraudRibbon.appendChild(fraudProbability);
  tile.appendChild(fraudRibbon);
}

itemtiles = document.getElementsByClassName('itemtile-header');
for (const tile of itemtiles) {
  const matches = tile.innerHTML.match(/[0-9]{9,}/);
  const id = matches[0];
  if (id !== 0 || id !== undefined || id !== null) {
    fetch(`http://localhost:4200/api/ads/${id}`)
      .then((response) => response.json())
      .then((data) => {
        tile.nextSibling.childNodes[3].firstChild.innerHTML = `Scam: ${data.ad.fraud_score}%`;
        tile.nextSibling.childNodes[3].firstChild.setAttribute(
          'fraud-probability',
          data.ad.fraud_score,
        );
      });
  }
}

// Grabbing all the spans with fraud-probability
const fraudProbabilities = document.getElementsByClassName('fraud-probability');

// Assigning background-color class to the ribbons based on the probability in the spans
for (const fraudProbability of fraudProbabilities) {
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
for (const item of itemtiles) {
  if (item.childElementCount === 3) {
    item.removeChild(item.lastChild);
  }
}
