import { sendData } from './request';

if (!document.getElementById('fraudAdButton')) {
  let fraudContainer = document.createElement('li');

  let fraudAd = document.createElement('button');
  fraudAd.setAttribute('onclick', sendData);
  fraudAd.className = 'button-ghost full-width taller';
  fraudAd.id = 'fraudAdButton';

  let icon = document.createElement('i');
  icon.className = 'button-icon icon-magnifier-green';

  let fraudContent = document.createElement('span');
  fraudContent.innerHTML = 'Anzeige prüfen';

  fraudAd.appendChild(icon);
  fraudAd.appendChild(fraudContent);
  fraudContainer.appendChild(fraudAd);
  document.getElementsByClassName('iconlist')[2].prepend(fraudContainer);
}
