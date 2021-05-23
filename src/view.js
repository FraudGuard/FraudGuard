import sendData from './sendData';

/**
 * Erstellt auf der Ansichtsseite einer Anzeige den "Anzeige prüfen" Knopf. Dem Knopf wird das onClick Event sendData zugewiesen
 *
 */
if (!document.getElementById('fraudAdButton')) {
  const fraudContainer = document.createElement('li');

  const fraudAd = document.createElement('button');
  fraudAd.addEventListener('click', sendData);
  fraudAd.className = 'button-ghost full-width taller';
  fraudAd.style.backgroundColor = '#86B817';
  fraudAd.style.color = 'white';
  fraudAd.id = 'fraudAdButton';

  const icon = document.createElement('i');
  icon.className = 'button-icon icon-magnifier-white';

  const fraudContent = document.createElement('span');
  fraudContent.innerHTML = 'Anzeige prüfen';
  fraudContent.id = 'fraudContent';

  fraudAd.appendChild(icon);
  fraudAd.appendChild(fraudContent);
  fraudContainer.appendChild(fraudAd);
  document.getElementsByClassName('iconlist')[2]?.prepend(fraudContainer);
}
