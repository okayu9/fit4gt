'use strict';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.includes("https://translate.google.com/")) {
        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(() => {
    chrome.tabs.executeScript(null, {file: "script.js"});
});
