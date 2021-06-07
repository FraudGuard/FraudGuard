/**
 * Injiziert in den Quellcode von eBay das Logo von FraudGuard
 *
 */

const link = document.createElement('a');
const logo = document.createElement('img');

link.href = 'https://github.com/FraudGuard/FraudGuard';

logo.src = 'https://avatars.githubusercontent.com/u/83354594?s=200&v=4';

logo.width = '100';
logo.height = '100';

// document.getElementById('site-logo').style.cssText += 'display:flex;align-items:center'
document.getElementById('site-logo').style.cssText += 'position:relative';
const ebay = document.getElementById('site-logo');

// logo.style.margin = '0px 0px 50px 350px';
link.style.position = 'absolute';
link.style.left = '50%';
link.style.top = '-20px';
link.style.transform = 'translateX(-50%)';

link.appendChild(logo);
ebay.append(link, ebay.childNodes[0]);
