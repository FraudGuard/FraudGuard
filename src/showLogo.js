/**
 * Injeziert in den Quellcode von eBay das Logo von FraudGuard
 *
 */

const link = document.createElement('a');
const logo = document.createElement('img');

link.href = 'https://github.com/FraudGuard/FraudGuard';

logo.src =
  'https://avatars.githubusercontent.com/u/68067715?s=40&u=33674b40df5283e3db2731cb4f14531cc8217690&v=4';

const ebay = document.getElementById('site-logo');

ebay.style.display = 'flex';
ebay.style.flexDirection = 'row';

link.appendChild(logo);
ebay.appendChild(link);
