/* eslint-disable no-undef */
chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (currentTabInfo) => {
    if (/^https:\/\/www\.ebay-kleinanzeigen/.test(currentTabInfo.url)) {
      chrome.tabs.insertCSS(null, { file: './css/extension.css' });
      chrome.tabs.executeScript(null, { file: './main.bundle.js' });
    }
  });
});
