import sendData from './sendData';

if (!document.getElementById('fraudAdButton')) {
  const fraudContainer = document.createElement('li');

  const fraudAd = document.createElement('button');
  fraudAd.addEventListener('click', sendData);
  fraudAd.className = 'button-ghost full-width taller';
  fraudAd.id = 'fraudAdButton';

  const icon = document.createElement('i');
  icon.className = 'button-icon icon-magnifier-green';

  const fraudContent = document.createElement('span');
  fraudContent.innerHTML = 'Anzeige prüfen';

  fraudAd.appendChild(icon);
  fraudAd.appendChild(fraudContent);
  fraudContainer.appendChild(fraudAd);
  document.getElementsByClassName('iconlist')[2]?.prepend(fraudContainer);
}
