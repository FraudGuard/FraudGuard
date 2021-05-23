import setColor from './setColor';

const itemtiles = document.getElementsByClassName('itemtile-body');

/**
 * Macht Anfrage an jede Anzeige auf der eBay-Kleinanzeigen Startseite und erstellt für diese Bänder auf den dann der Score abgebildet wird. Die Bänder werden nur erstellt wenn wir die Anzeigen in unserer Datenbank haben
 *
 */
for (const tile of itemtiles) {
  const matches = tile.innerHTML.match(/[0-9]{9,}/);
  const id = matches?.[0];
  if (id) {
    fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/ads/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.ad !== undefined) {
          // if (data.fraud_score) {
          const score = data.fraud_score;

          const fraudRibbon = document.createElement('div');
          fraudRibbon.className = 'fraud-ribbon';

          const fraudProbability = document.createElement('span');
          fraudProbability.className = 'fraud-probability';
          fraudProbability.setAttribute('fraud-probability', score);

          // Assigning background-color class to the ribbons based on the probability in the spans
          setColor(score, fraudProbability, 'gallery');

          fraudRibbon.appendChild(fraudProbability);
          tile.appendChild(fraudRibbon);
        }
      });
  }
}
