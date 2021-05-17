const itemtiles = document.getElementsByClassName('itemtile-body');

// Making request to every ad, if(data.ad !== undefined) generating a ribbon for each tile ==> should be each ads (exclude tiles that are not an ad)
for (const tile of itemtiles) {
  const matches = tile.innerHTML.match(/[0-9]{9,}/);
  const id = matches[0];

  fetch(`http://localhost:4200/api/ads/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.ad !== undefined) {
        const score = Math.round(data.ad.fraud_score);

        const fraudRibbon = document.createElement('div');
        fraudRibbon.className = 'fraud-ribbon';

        const fraudProbability = document.createElement('span');
        fraudProbability.className = 'fraud-probability';
        fraudProbability.innerHTML = `Scam: ${score}%`;
        fraudProbability.setAttribute('fraud-probability', score);

        // Assigning background-color class to the ribbons based on the probability in the spans
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

// Remove probabilities on ads that dont have a price
for (const item of itemtiles) {
  if (item.childElementCount === 3) {
    item.removeChild(item.lastChild);
  }
}
