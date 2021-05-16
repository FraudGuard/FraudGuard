const itemtiles = document.getElementsByClassName('itemtile-body');

// making request to the backend server and attach the score to the fraud-ribbon
for (let i = 0; i < itemtiles.length; i += 1) {
  const matches = itemtiles[i].innerHTML.match(/[0-9]{9,}/);

  const id = matches[0];

  console.log(id);
  // fetch(`http://localhost:4200/api/analyze/${id}`);
}

//   fetch(`http://localhost:4200/api/analyze/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.ad !== undefined) {
//         const score = Math.round(data.ad.fraud_score);

//         const fraudRibbon = document.createElement('div');
//         fraudRibbon.className = 'fraud-ribbon';

//         const fraudProbability = document.createElement('span');
//         fraudProbability.className = 'fraud-probability';

//         fraudProbability.innerHTML = `Scam: ${score}%`;
//         fraudProbability.setAttribute('fraud-probability', score);

//         setColor(score,fraudProbability, "gallery")

//         fraudRibbon.appendChild(fraudProbability);
//         itemtiles[i].appendChild(fraudRibbon);
//       }
//     });
// }
// }

// Remove probabilities on ads that dont have a price
for (const tile of itemtiles) {
  if (tile.childElementCount === 3) {
    tile.removeChild(tile.lastChild);
  }
}
