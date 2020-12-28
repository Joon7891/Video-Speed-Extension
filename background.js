const DEFAULT_PLAYBACK = 2.0;

chrome.runtime.onStartup.addListener(function() {
    chrome.storage.local.set({"playback_speed": DEFAULT_PLAYBACK}, () => {});

    /*
    chrome.storage.local.get(['playback_speed'], function(result) {
        alert('Value currently is ' + result.playback_speed);
    });
    */
});

chrome.runtime.onConnect.addListener(function() {

});