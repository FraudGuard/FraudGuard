let itemtiles = document.getElementsByClassName('itemtile-body');

for (let i = 0; i < itemtiles.length; i += 1) {
  let fraudRibbon = document.createElement('div');
  fraudRibbon.className = 'fraud-ribbon';

  let fraudProbability = document.createElement('span');
  fraudProbability.className = 'fraud-probability';

  fraudRibbon.appendChild(fraudProbability);
  itemtiles[i].appendChild(fraudRibbon);
}

// Mocking the probability
let mockData = document.getElementsByClassName('fraud-probability');
for (let i = 0; i < mockData.length; i += 1) {
  let ran = Math.round(Math.random() * 100);
  mockData[i].innerHTML = ran;
  mockData[i].setAttribute('fraud-probability', ran);
}
// if VB oder job kein mock genereiren

const between = (x, min, max) => {
  return x >= min && x <= max;
};

let fraudProbabilities = document.getElementsByClassName('fraud-probability');

// TODO DISGUSTING FIX THIS SHIT ASAP
for (let i = 0; i < fraudProbabilities.length; i += 1) {
  if (fraudProbabilities[i].innerHTML < 19) {
    fraudProbabilities[i].parentElement.classList.add('green');
  }
  if (fraudProbabilities[i].innerHTML > 60) {
    fraudProbabilities[i].parentElement.classList.add('red');
  }
  if (
    fraudProbabilities[i].innerHTML < 30 &&
    fraudProbabilities[i].innerHTML > 19
  ) {
    fraudProbabilities[i].parentElement.classList.add('yellow');
  }
  if (
    fraudProbabilities[i].innerHTML < 59 &&
    fraudProbabilities[i].innerHTML > 30
  ) {
    fraudProbabilities[i].parentElement.classList.add('orange');
  }
}
