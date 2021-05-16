import sendData from './sendData';
import setColor from './setColor';

if (!document.getElementById('fraudAdButton')) {
  const id = parseInt(
    document
      .getElementById('viewad-extra-info')
      .lastChild.previousSibling.textContent.split(' ', 2)[1],
    10,
  );

  const fraudContainer = document.createElement('li');

  const fraudAd = document.createElement('button');
  fraudAd.addEventListener('click', sendData);
  fraudAd.className = 'button-ghost full-width taller';
  fraudAd.id = 'fraudAdButton';

  const icon = document.createElement('i');
  icon.className = 'button-icon icon-magnifier-green';

  const fraudContent = document.createElement('span');
  fraudContent.innerHTML = 'Anzeige prüfen';
  fraudContent.id = 'fraudContent';

  fetch(`http://localhost:4200/api/ads/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (!Number.isNaN(data.fraud_score)) {
        const score = Math.round(data.fraud_score);

        document.getElementById(
          'fraudContent',
        ).innerHTML = `Fraud Score: ${score}%`;

        const button = document.getElementById('fraudAdButton');
        button.disabled = true;

        setColor(score, button, 'button');
      }
    });

  fraudAd.appendChild(icon);
  fraudAd.appendChild(fraudContent);
  fraudContainer.appendChild(fraudAd);
  document.getElementsByClassName('iconlist')[2]?.prepend(fraudContainer);
}
