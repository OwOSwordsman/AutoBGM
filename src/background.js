chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    isAudible = changeInfo.audible
    if (isAudible != null && tab.pinned) {
        console.log("Audio: " + changeInfo.audible);
    }
});