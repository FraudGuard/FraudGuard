import getData, { addTooltip } from './getData';
import getId from './getId';
import setColor from './setColor';

/**
 * Erstellt auf der Ansichtsseite einer Anzeige den "Anzeige prüfen" Knopf. Dem Knopf wird das onClick Event getData zugewiesen
 *
 */
if (
  !document.getElementById('fraudAdButton') &&
  !document.getElementById('registration-submit') &&
  !document.getElementById('login-submit') &&
  !document.getElementsByClassName('ownprofile-header')[0]
) {
  const fraudContainer = document.createElement('li');

  fraudContainer.id = 'input';

  const button = document.createElement('button');
  button.addEventListener('click', getData);
  button.className = 'button-ghost full-width taller';
  button.style.backgroundColor = '#86B817';
  button.style.color = 'white';
  button.id = 'fraudAdButton';

  const icon = document.createElement('i');
  icon.className = 'button-icon icon-magnifier-white';
  icon.id = 'analyzeIcon';

  const fraudContent = document.createElement('span');
  fraudContent.innerHTML = 'Anzeige prüfen';
  fraudContent.id = 'fraudContent';

  fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/ads/${getId()}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.ad !== undefined) {
        const score = data.ad.fraud_score;
        const keineBewertungMoeglich = data.ad?.keine_bewertung_moeglich;
        if (!document.getElementById('tooltip')) {
          addTooltip(data.ad);
        }
        setColor(score, button, 'button', keineBewertungMoeglich);
        button.disabled = true;
      }
    });

  button.appendChild(icon);
  button.appendChild(fraudContent);
  fraudContainer.appendChild(button);
  document.getElementsByClassName('iconlist')[0]?.prepend(fraudContainer);
}
