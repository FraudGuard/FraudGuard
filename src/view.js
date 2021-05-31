import sendData from './sendData';

/**
 * Erstellt auf der Ansichtsseite einer Anzeige den "Anzeige prüfen" Knopf. Dem Knopf wird das onClick Event sendData zugewiesen
 *
 */
if (!document.getElementById('fraudAdButton')) {
  const fraudContainer = document.createElement('li');

  fraudContainer.id = 'input';

  const button = document.createElement('button');
  button.addEventListener('click', sendData);
  button.className = 'button-ghost full-width taller';
  button.style.backgroundColor = '#86B817';
  button.style.color = 'white';
  button.id = 'fraudAdButton';

  const icon = document.createElement('i');
  icon.className = 'button-icon icon-magnifier-white';

  const fraudContent = document.createElement('span');
  fraudContent.innerHTML = 'Anzeige prüfen';
  fraudContent.id = 'fraudContent';

  button.appendChild(icon);
  button.appendChild(fraudContent);
  fraudContainer.appendChild(button);
  document.getElementsByClassName('iconlist')[0]?.prepend(fraudContainer);
}
