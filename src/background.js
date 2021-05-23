/* eslint-disable no-undef */
/**
 * Injeziert die Style-sheets und JavaScript sobald die Seite vollständig geladen ist
 *
 */
chrome.webNavigation.onCompleted.addListener((tab) => {
  if (tab.frameId === 0) {
    chrome.tabs.get(tab.tabId, (currentTabInfo) => {
      if (/^https:\/\/www\.ebay-kleinanzeigen/.test(currentTabInfo.url)) {
        chrome.tabs.insertCSS(null, { file: './css/extension.css' });
        chrome.tabs.executeScript(null, { file: './main.bundle.js' });
      }
    });
  }
});
