const itemtiles = document.getElementsByClassName('itemtile-body');

// making request to the backend server and attach the score to the fraud-ribbon
for (const tile of itemtiles) {
  const matches = tile.innerHTML.match(/[0-9]{9,}/);
  const id = matches[0];
  if (id !== 0 || id !== undefined || id !== null) {
    fetch(`http://localhost:4200/api/ads/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.ad !== undefined) {
          const fraudRibbon = document.createElement('div');
          fraudRibbon.className = 'fraud-ribbon';

          const fraudProbability = document.createElement('span');
          fraudProbability.className = 'fraud-probability';

          fraudProbability.innerHTML = `Scam: ${data.ad.fraud_score}%`;
          fraudProbability.setAttribute(
            'fraud-probability',
            data.ad.fraud_score,
          );

          const fraudScore = fraudProbability.getAttribute('fraud-probability');
          if (fraudScore < 19) {
            fraudProbability.parentElement.classList.add('green');
          } else if (fraudScore < 30 && fraudScore > 19) {
            fraudProbability.parentElement.classList.add('yellow');
          } else if (fraudScore < 59 && fraudScore > 30) {
            fraudProbability.parentElement.classList.add('orange');
          } else {
            fraudProbability.parentElement.classList.add('red');
          }

          fraudRibbon.appendChild(fraudProbability);
          tile.appendChild(fraudRibbon);
        }
      });
  }
}

// Remove probabilities on ads that dont have a price
for (const tile of itemtiles) {
  if (tile.childElementCount === 3) {
    tile.removeChild(tile.lastChild);
  }
}
