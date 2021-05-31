import setColor from './setColor';

/**
 * Funktion die beim Laden prüft, ob die Anzeige in der Datenbank liegt
 */
const matches = document
  .getElementById('viewad-extra-info')
  ?.children[2].innerHTML.match(/[0-9]{9,}/);
const id = matches?.[0];

/**
 * Funktion die auf der Ansichtsseite einer Anzeige beim drücken des "Anzeigen prüfen" Knopfes ausgeführt wird. Es wird die Id der Anzeige ausgelesen und mit dieser dann ein Request auf den Analyze-Service gemacht
 *
 */
const sendData = () => {
  const button = document.getElementById('fraudAdButton');
  button.style.backgroundColor = 'lightgray';
  button.children[1].innerHTML = 'Wird geladen';

  // fetch(`http://localhost:4200/api/analyze/${id}`)
  fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/analyze/${id}`)
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
      button.disabled = true;

      if (!data.beschreibung) {
        document.removeChild(
          document.getElementsByClassName('icon-info-black')[0],
        );
      }

      button.disabled = true;
    });
};

export default sendData;
