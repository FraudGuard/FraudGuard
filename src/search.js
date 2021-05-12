if (!document.getElementById('fraudModuleID')) {
  const aditems = document.getElementsByClassName('aditem-main--bottom');

  if (aditems) {
    for (const item of aditems) {
      const fraudModule = document.createElement('p');
      fraudModule.className = 'text-module-end fraud-module';
      fraudModule.id = 'fraudModuleID';

      const fraudTag = document.createElement('span');
      fraudTag.className = 'simpletag tag-small fraud-tag';

      fraudModule.appendChild(fraudTag);
      item.appendChild(fraudModule);
    }
  }

  // Mocking the probability
  const mockTag = document.getElementsByClassName('fraud-tag');
  for (const x of mockTag) {
    const ran = Math.round(Math.random() * 100);
    x.innerHTML = `Scam: ${ran}%`;
    x.setAttribute('fraud-tag', ran);
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
