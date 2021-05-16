if (!document.getElementById('fraudModuleID')) {
  const aditems = document.getElementsByClassName('aditem-main--bottom');

  // making request to the backend server and attach the score to the fraud-tag
  for (const aditem of aditems) {
    const matches = aditem.parentElement.innerHTML.match(/[0-9]{9,}/);
    const id = matches[0];
    if (id !== 0 || id !== undefined || (id !== null && aditems)) {
      for (const item of aditems) {
        const fraudModule = document.createElement('p');
        fraudModule.className = 'text-module-end fraud-module';
        fraudModule.id = 'fraudModuleID';

        const fraudTag = document.createElement('span');
        fraudTag.className = 'simpletag tag-small fraud-tag';

        fraudModule.appendChild(fraudTag);
        item.appendChild(fraudModule);
      }

      fetch(`http://localhost:4200/api/ads/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.ad !== undefined) {
            aditem.lastChild.innerHTML = `Scam: ${data.ad.fraud_score}%`;
            aditem.lastChild.setAttribute('fraud-tag', data.ad.fraud_score);
          }
        });
    }
  }
}

// Grabbing all the tags with fraud-tag
const fraudTagProbs = document.getElementsByClassName('fraud-tag');

// Assigning border-color class to the tags based on the probability in the spans
for (const fraudProb of fraudTagProbs) {
  if (fraudProb.getAttribute('fraud-tag') < 19) {
    fraudProb.classList.add('green-tag');
  } else if (
    fraudProb.getAttribute('fraud-tag') < 30 &&
    fraudProb.getAttribute('fraud-tag') > 19
  ) {
    fraudProb.classList.add('yellow-tag');
  } else if (
    fraudProb.getAttribute('fraud-tag') < 59 &&
    fraudProb.getAttribute('fraud-tag') > 30
  ) {
    fraudProb.classList.add('orange-tag');
  } else {
    fraudProb.classList.add('red-tag');
  }
}
