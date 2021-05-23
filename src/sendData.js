import setColor from './setColor';

/**
 * Funktion die auf der Ansichtsseite einer Anzeige beim drücken des "Anzeigen prüfen" Knopfes ausgeführt wird. Es wird die Id der Anzeige ausgelesen und mit dieser dann ein Request auf den Analyze-Service gemacht
 *
 */
const sendData = () => {
  const id = parseInt(
    document
      .getElementById('viewad-extra-info')
      .lastChild.previousSibling.textContent.split(' ', 2)[1],
    10,
  );

  fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/analyze/fromDb/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const button = document.getElementById('fraudAdButton');
      button.disabled = true;

      const score = data.fraud_score;
      setColor(score, button, 'button');
    });
};

export default sendData;
