/**
 * Funktion die beim Laden prüft, ob die Anzeige in der Datenbank liegt
 */
const getId = () =>
  document
    .getElementById('viewad-extra-info')
    ?.children[2].innerHTML.match(/[0-9]{9,}/)?.[0];

export default getId;
