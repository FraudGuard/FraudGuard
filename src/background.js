let active_tab_id = 0;

chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    active_tab_id = tab.tabId;

    if (/^https:\/\/www\.ebay-kleinanzeigen/.test(current_tab_info.url)) {
      chrome.tabs.insertCSS(null, { file: './css/alerts.css' });
      chrome.tabs.executeScript(null, { file: './main.bundle.js' }, () =>
        console.log('i injected'),
      );
    }
  });
});
