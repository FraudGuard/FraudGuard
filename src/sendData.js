import setColor from './setColor';

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
