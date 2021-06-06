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

  icon.src = 'https://loading.io/65777740-76ae-4724-ae02-478a21e1f8fc';

  button.replaceChild(icon, document.getElementById('analyzeIcon'));

  // fetch(`http://localhost:4200/api/analyze/${getId()}`)
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
