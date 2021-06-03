/**
 * Injiziert in den Quellcode von eBay das Logo von FraudGuard
 *
 */

const link = document.createElement('a');
const logo = document.createElement('img');

link.href = 'https://github.com/FraudGuard/FraudGuard';

logo.src = 'https://avatars.githubusercontent.com/u/83354594?s=200&v=4';

logo.width = '70';
logo.height = '70';

const ebay = document.getElementsByClassName('logo')[0];

logo.style.marginLeft = '250px';

link.appendChild(logo);
ebay.appendChild(link);
