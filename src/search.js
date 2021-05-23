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
    if (id !== 0 || id !== undefined || id !== null) {
      fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/ads/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.ad !== undefined) {
          // if (data?.fraud_score) {
            const fraudModule = document.createElement('p');
            fraudModule.className = 'text-module-end fraud-module';
            fraudModule.id = 'fraudModuleID';

            const score = data.ad.fraud_score;
            // const score = data.fraud_score;

            const fraudTag = document.createElement('span');
            fraudTag.className = 'simpletag tag-small fraud-tag';
            fraudTag.setAttribute('fraud-tag', score);

            setColor(score, fraudTag, 'tag');

            fraudModule.appendChild(fraudTag);
            aditem.appendChild(fraudModule);
          }
        });
    }
  }
}
