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
          const score = Math.round(data.ad.fraud_score * 100);

          const fraudRibbon = document.createElement('div');
          fraudRibbon.className = 'fraud-ribbon';

          const fraudProbability = document.createElement('span');
          fraudProbability.className = 'fraud-probability';

          fraudProbability.innerHTML = `Scam: ${score}%`;
          fraudProbability.setAttribute('fraud-probability', score);

          if (score < 19) {
            fraudProbability.parentElement.classList.add('green');
          } else if (score < 30 && score > 19) {
            fraudProbability.parentElement.classList.add('yellow');
          } else if (score < 59 && score > 30) {
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
