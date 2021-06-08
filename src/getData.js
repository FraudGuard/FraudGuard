import setColor from './setColor';
import getId from './getId';

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

  icon.src =
    'https://github.com/FraudGuard/FraudGuard/blob/main/src/assets/icons/loading-11.gif';

  button.replaceChild(icon, document.getElementById('analyzeIcon'));

  // fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/analyze/${getId()}`)
  fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/analyze/${getId()}`)
    .then((response) => response.json())
    .then((data) => {
      if (data?.beschreibung) {
        const tooltip = document.createElement('span');
        tooltip.innerHTML = data.beschreibung;
        tooltip.className = 'tooltip';
        tooltip.style.zIndex = '0';
        tooltip.id = 'tooltip';

        const input = document.getElementById('input');
        input.appendChild(tooltip);
      }

      const score = data.fraud_score;
      setColor(score, button, 'button');
    });
};

export default getData;
