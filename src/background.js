// listen for tab updates
let autoPaused = false;

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    isAudible = changeInfo.audible;
    isReloaded = changeInfo.status;

    // get first pinned tab
    chrome.tabs.query({ pinned: true }, function (tabs) {
        musicTab = tabs[0];

        if (tab.id == musicTab.id && isReloaded) {   // reset autoPaused flag on pinned tab reload
            autoPaused = false;

        // current tab is not target music tab and either music is playing or was auto paused previously
        } else if ((autoPaused || musicTab.audible) && (tab.id != musicTab.id && isAudible != null)) {
            // checks for when multiple tabs may be playing audio
            chrome.tabs.query({ pinned: false, audible: true }, function (playingTabs) {
                // set autoPaused flag
                if (isAudible && !autoPaused) { // music has not been auto paused yet and another tab is playing audio
                    autoPaused = true;
                // music has been auto paused and all tabs are no longer playing audio
                } else if (!isAudible && autoPaused && playingTabs.length == 0) {
                    autoPaused = false;
                } else {    // criteria not met, exit
                    return;
                }
                
                // run js on first pinned tab
                chrome.scripting.executeScript({
                    files: ['controlAudio.js'],
                    target: { tabId: musicTab.id }
                });
            });
        }
    });
});