let aditems = document.getElementsByClassName('aditem-main--bottom');

if (aditems) {
  for (let item of aditems) {
    let fraudModule = document.createElement('p');
    fraudModule.className = 'text-module-end fraud-module';

    let fraudTag = document.createElement('span');
    fraudTag.className = 'simpletag tag-small fraud-tag';

    fraudModule.appendChild(fraudTag);
    item.appendChild(fraudModule);
  }
}

// Mocking the probability
let mockTag = document.getElementsByClassName('fraud-tag');
for (let x of mockTag) {
  let ran = Math.round(Math.random() * 100);
  x.innerHTML = 'Scam: ' + ran + '%';
  x.setAttribute('fraud-tag', ran);
}
