import setColor from './setColor';
import getId from './getId';

/**
 * Funktion die auf der Ansichtsseite einer Anzeige beim drücken des "Anzeigen prüfen" Knopfes ausgeführt wird. Es wird die Id der Anzeige ausgelesen und mit dieser dann ein Request auf den Analyze-Service gemacht
 *
 */
const getData = () => {
  const button = document.getElementById('fraudAdButton');
  button.style.backgroundColor = 'lightgray';
  button.children[1].innerHTML = 'Wird geladen';
  button.disabled = true;

  // fetch(`http://localhost:4200/api/analyze/${getId()}`)
  fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/analyze/${getId()}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.beschreibung) {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.innerHTML = data.beschreibung;

        const input = document.getElementById('input');
        input.appendChild(tooltip);
      }

      const score = data.fraud_score;
      setColor(score, button, 'button');

      if (!data.beschreibung) {
        document.removeChild(
          document.getElementsByClassName('icon-info-black')[0],
        );
      }
    });
};

export default getData;
