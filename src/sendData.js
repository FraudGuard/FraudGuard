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
      ).innerHTML = `Fraud Score: ${score}`;

      const button = document.getElementById('fraudAdButton');
      button.disabled = true;

      if (score < 19) {
        button.style.backgroundColor = 'green';
      } else if (score < 30 && score > 19) {
        button.style.backgroundColor = 'yellow';
      } else if (score < 59 && score > 30) {
        button.style.backgroundColor = 'orange';
      } else {
        button.style.backgroundColor = 'red';
      }
    });
};

export default sendData;
