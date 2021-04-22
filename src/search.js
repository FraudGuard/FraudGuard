const aditems = document.getElementsByClassName('aditem-main--bottom');

if (aditems) {
  for (const item of aditems) {
    const fraudModule = document.createElement('p');
    fraudModule.className = 'text-module-end fraud-module';

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
