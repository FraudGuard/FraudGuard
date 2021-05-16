import setColor from './setColor';

const sendData = () => {
  const id = parseInt(
    document
      .getElementById('viewad-extra-info')
      .lastChild.previousSibling.textContent.split(' ', 2)[1],
    10,
  );

  fetch(`http://localhost:4200/api/analyze/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const score = Math.round(data.fraud_score);

      document.getElementById(
        'fraudContent',
      ).innerHTML = `Fraud Score: ${score}%`;

      const button = document.getElementById('fraudAdButton');
      button.disabled = true;

      setColor(score, button);
    });
};

export default sendData;
