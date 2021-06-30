import { openFeedback } from './feedback';

const wahrscheinlichkeiten = {
  1: 'Unwahrscheinlich &nbsp;&nbsp;',
  2: 'geringe Wahrscheinlichkeit &nbsp;&nbsp;',
  3: 'wahrscheinlich &nbsp;&nbsp;',
  4: 'sehr wahrscheinlich &nbsp;&nbsp;',
  5: 'Keine Bewertung möglich &nbsp;&nbsp;',
};

const infoIcon = document.createElement('i');
infoIcon.className = 'button-icon icon-info-black openBTN';
infoIcon.addEventListener('click', openFeedback);

/* eslint-disable no-param-reassign */
/**
 * Ordnet den gegebenen HTMLElement eine Farbe zu, basierend auf den Score und des Styles.
 *
 * @param {number} - score
 * @param {HTMLElement} - HMTLElement that gets modified
 * @param {string} - Style of the HMTLElement (button, tag or gallery)
 */
const setColor = async (score, mount, style, keineBewertungMoeglich) => {
  const tooltip = document.getElementById('tooltip');
  if (style === 'button') {
    if (keineBewertungMoeglich === 1) {
      mount.style.backgroundColor = 'lightgrey';
      mount.style.color = 'black';
      mount.innerHTML = `${wahrscheinlichkeiten[5]}`;
      mount.appendChild(infoIcon);
      if (tooltip) {
        tooltip.style.backgroundColor = 'lightgrey';
        tooltip.style.color = 'black';
      }
    } else if (score < -30) {
      mount.style.backgroundColor = 'green';
      mount.innerHTML = `${wahrscheinlichkeiten[1]}`;
      mount.appendChild(infoIcon);
      if (tooltip) {
        tooltip.style.backgroundColor = 'green';
        tooltip.style.color = 'white';
      }
    } else if (score >= -30 && score < 20) {
      mount.style.backgroundColor = 'lightgreen';
      mount.style.color = 'black';
      mount.innerHTML = `${wahrscheinlichkeiten[2]}`;
      mount.appendChild(infoIcon);
      if (tooltip) {
        tooltip.style.backgroundColor = 'lightgreen';
        tooltip.style.color = 'black';
      }
    } else if (score >= 20 && score < 40) {
      mount.style.backgroundColor = 'orange';
      mount.innerHTML = `${wahrscheinlichkeiten[3]}`;
      mount.appendChild(infoIcon);
      if (tooltip) {
        tooltip.style.backgroundColor = 'orange';
      }
    } else if (score <= 40) {
      mount.style.backgroundColor = 'red';
      mount.innerHTML = `${wahrscheinlichkeiten[4]}`;
      mount.appendChild(infoIcon);
      if (tooltip) {
        tooltip.style.backgroundColor = 'red';
      }
    }
  } else if (style === 'tag') {
    if (score < -30) {
      mount.classList.add('green-tag');
      mount.innerHTML = `${wahrscheinlichkeiten[1]}`;
    } else if (score > -30 && score < 10) {
      mount.classList.add('yellow-tag');
      mount.innerHTML = `${wahrscheinlichkeiten[2]}`;
    } else if (score > 10 && score < 40) {
      mount.classList.add('orange-tag');
      mount.innerHTML = `${wahrscheinlichkeiten[3]}`;
    } else if (score <= 40) {
      mount.classList.add('red-tag');
      mount.innerHTML = `${wahrscheinlichkeiten[4]}`;
    } else if (keineBewertungMoeglich) {
      mount.classList.add('grey-tag');
      mount.innerHTML = `${wahrscheinlichkeiten[5]}`;
    }
  } else if (style === 'gallery') {
    if (score < -30) {
      mount.classList.add('green');
      mount.innerHTML = `${wahrscheinlichkeiten[1]}`;
    } else if (score > -30 && score < 10) {
      mount.classList.add('yellow');
      mount.innerHTML = `${wahrscheinlichkeiten[2]}`;
    } else if (score > 10 && score < 40) {
      mount.classList.add('orange');
      mount.innerHTML = `${wahrscheinlichkeiten[3]}`;
    } else if (score <= 40) {
      mount.classList.add('red');
      mount.innerHTML = `${wahrscheinlichkeiten[4]}`;
    } else if (keineBewertungMoeglich) {
      mount.classList.add('grey');
      mount.innerHTML = `${wahrscheinlichkeiten[5]}`;
    } else {
      // eslint-disable-next-line no-console
      console.log('setColor parameter "style" doesnt match');
    }
  }
};
export default setColor;
