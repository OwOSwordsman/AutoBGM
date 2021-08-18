// listen for tab updates
let autoPaused = false;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    isAudible = changeInfo.audible;
    isReloaded = changeInfo.status;

    // get first pinned tab
    chrome.tabs.query({ pinned: true }, function (tabs) {
        musicTab = tabs[0];
        console.log(autoPaused); // LOG

        if (tab.id == musicTab.id && isReloaded) {   // reset autoPaused flag on pinned tab reload
            autoPaused = false;
            
        // current tab is not target music tab and either music is playing or was auto paused previously
        } else if ((autoPaused || musicTab.audible) && (tab.id != musicTab.id && isAudible != null)) {
            // set autoPaused flag
            if (isAudible) {
                autoPaused = true;
            } else {
                autoPaused = false;
            }

            // run js on first pinned tab
            chrome.scripting.executeScript({
                files: ['controlAudio.js'],
                target: { tabId: musicTab.id }
            });
        }
    });
});