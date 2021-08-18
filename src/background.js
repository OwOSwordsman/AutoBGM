chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    isAudible = changeInfo.audible
    if (isAudible != null && !tab.pinned) {
        console.log("Audio: " + changeInfo.audible);
        chrome.tabs.query({ pinned: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                files: ['controlAudio.js'],
                target: { tabId: tabs[0].id }
            });
        });
    }
});