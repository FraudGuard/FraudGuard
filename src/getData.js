import setColor from './setColor';
import getId from './getId';

const ignoreProperties = [
  'beschreibung',
  'createdAt',
  'updatedAt',
  'metadaten_breitengrad',
  'metadaten_laengengrad',
  'metadaten_anzeige_zeit',
  'konto_erstellt_zeit',
];

/**
 * Funktion, die das Tooltip mit der Begründung generiert
 * @param {Ad} ad Anzeige
 */

export const addTooltip = (ad) => {
  let merkmale = '';
  // eslint-disable-next-line guard-for-in
  for (const k in ad) {
    if (ad[k] !== 0 && ignoreProperties.indexOf(k) === -1) {
      merkmale += `${k}: <b>${Math.round(ad[k] * 100) / 100}</b><br/>`;
    }
  }
  const tooltip = document.createElement('span');
  tooltip.innerHTML = `${
    ad?.beschreibung ? `${ad.beschreibung}<br/><hr><br/>` : ''
  }<b>Zutreffende Merkmale:</b><br/>${merkmale}`;
  tooltip.className = 'tooltip';
  tooltip.style.zIndex = 1000;
  tooltip.style.animationName = 'fadein';
  tooltip.style.animationDuration = '200ms';
  tooltip.style.animationFillMode = 'forwards';
  tooltip.style.border = 'none';
  tooltip.style.marginTop = '-8px';
  tooltip.style.position = 'relative';
  tooltip.style.boxShadow = 'none';
  tooltip.id = 'tooltip';

  const input = document.getElementById('input');
  input.appendChild(tooltip);
};

/**
 * Funktion die auf der Ansichtsseite einer Anzeige beim drücken des "Anzeigen prüfen" Knopfes ausgeführt wird. Es wird die Id der Anzeige ausgelesen und mit dieser dann ein Request auf den Analyze-Service gemacht
 *
 */
const getData = () => {
  const button = document.getElementById('fraudAdButton');
  const icon = document.createElement('img');
  button.style.backgroundColor = 'lightgray';
  button.children[1].innerHTML = 'Wird geladen';
  button.disabled = true;

  icon.style.width = '50px';
  icon.src =
    'https://github.com/FraudGuard/FraudGuard/blob/main/src/assets/icons/loading-11.gif?raw=true';

  button.replaceChild(icon, document.getElementById('analyzeIcon'));

  // fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/analyze/${getId()}`)
  fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/analyze/${getId()}`)
    .then((response) => response.json())
    .then((data) => {
      addTooltip(data);
      const score = data.fraud_score;
      const bewertungMoeglich = data.ad.keine_bewertung_moeglich;
      setColor(score, button, 'button', bewertungMoeglich);
    });
};

export default getData;
