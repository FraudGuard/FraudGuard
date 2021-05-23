import setColor from './setColor';

/**
 * Funktion die beim Laden prüft, ob die Anzeige in der Datenbank liegt
 */
const matches = document
  .getElementById('viewad-extra-info')
  ?.children[2].innerHTML.match(/[0-9]{9,}/);
const id = matches?.[0];

if (id !== 0 || id !== undefined || id !== null) {
  fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/ads/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.fraud_score) {
        const button = document.getElementById('fraudAdButton');
        button.disabled = true;

        const score = data.fraud_score;
        setColor(score, button, 'button');
      }
    });
}

/**
 * Funktion die auf der Ansichtsseite einer Anzeige beim drücken des "Anzeigen prüfen" Knopfes ausgeführt wird. Es wird die Id der Anzeige ausgelesen und mit dieser dann ein Request auf den Analyze-Service gemacht
 *
 */
const sendData = () => {
  const fraudAdButton = document.getElementById('fraudAdButton');
  fraudAdButton.style.backgroundColor = 'lightgray';
  fraudAdButton.children[1].innerHTML = 'Wird geladen';

  // const id = parseInt(
  //   document
  //     .getElementById('viewad-extra-info')
  //     .lastChild.previousSibling.textContent.split(' ', 2)[1],
  //   10,
  // );

  fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/analyze/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const button = document.getElementById('fraudAdButton');
      button.disabled = true;

      const score = data.fraud_score;
      setColor(score, button, 'button');
    });
};

export default sendData;
