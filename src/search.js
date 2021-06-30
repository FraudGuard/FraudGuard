import setColor from './setColor';

/**
 * Macht Anfrage an jede Anzeige auf der eBay-Kleinanzeigen Startseite und erstellt für diese Tags auf den dann der Score abgebildet wird. Die Tags werden nur erstellt wenn wir die Anzeigen in unserer Datenbank haben
 *
 */
if (!document.getElementById('fraudModuleID')) {
  const aditems = document.getElementsByClassName('aditem-main--bottom');

  // making request to the backend server and attach the score to the fraud-tag
  for (const aditem of aditems) {
    const matches = aditem.parentElement.innerHTML.match(/[0-9]{9,}/);
    const id = matches[0];

    const getD = () => {
      // fetch(`http://localhost:4200/api/analyze/${id}`)
      fetch(`http://localhost:4200/api/analyze/${id}`)
        .then((response) => response.json())
        .then((d) => {
          if (d.ad !== undefined) {
            const loadingImg = document.createElement('img');
            loadingImg.src = 'https://picsum.photos/100/100';

            const fraudModule = document.createElement('p');
            fraudModule.className = 'text-module-end fraud-module';
            fraudModule.id = 'fraudModuleID';
            const score = d.ad.fraud_score;
            const bewertungMoeglich = d.ad.bewertung_moeglich;
            const fraudTag = document.createElement('span');
            document.replaceChild(
              loadingImg,
              aditem.previousElementSibling.previousElementSibling
                .lastElementChild,
            );
            fraudTag.className = 'simpletag tag-small fraud-tag';
            fraudTag.setAttribute('fraud-tag', score);

            setColor(score, fraudTag, 'tag', bewertungMoeglich);
            fraudModule.appendChild(fraudTag);
            aditem.appendChild(fraudModule);
          }
        });
    };

    if (id !== 0 || id !== undefined) {
      // fetch(`http://localhost:4200/api/ads/${id}`)
      fetch(`http://localhost:4200/api/ads/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.ad !== undefined) {
            const fraudModule = document.createElement('p');
            fraudModule.className = 'text-module-end fraud-module fraudModule';

            const score = data.ad.fraud_score;
            const bewertungMoeglich = data.ad?.keine_bewertung_moeglich;

            const fraudTag = document.createElement('span');
            fraudTag.className = 'simpletag tag-small fraud-tag';
            fraudTag.setAttribute('fraud-tag', score);

            setColor(score, fraudTag, 'tag', bewertungMoeglich);

            fraudModule.appendChild(fraudTag);
            aditem.appendChild(fraudModule);
          } else {
            const iconContainer = document.createElement('div');
            const icon = document.createElement('a');
            icon.id = 'searchIcon';
            icon.title = 'Anzeige scannen';
            icon.className = 'icon icon-smaller icon-star-magnifier-open-blue';
            icon.style.border = '1px solid black';
            icon.style.borderRadius = '20px';
            icon.style.marginBottom = '8px';
            icon.addEventListener('click', getD);
            iconContainer.appendChild(icon);

            aditem.previousElementSibling.previousElementSibling.insertBefore(
              iconContainer,
              aditem.previousElementSibling.previousElementSibling.lastChild,
            );
          }
        });
    }
  }
}
