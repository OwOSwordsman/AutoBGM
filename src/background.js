// listen for tab updates
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(changeInfo); // LOG
    isAudible = changeInfo.audible

    if (isAudible != null && !tab.pinned) { // audio for tab changed and is not pinned
        // run js on first pinned tab
        chrome.tabs.query({ pinned: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                files: ['controlAudio.js'],
                target: { tabId: tabs[0].id }
            });
        });
    }
});