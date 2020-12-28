document.querySelectorAll('video').forEach(function(videoDOM) {
    chrome.storage.local.get(['playback_speed'], function(result) {
        videoDOM.playbackRate = result.playback_speed;
        console.log("Set " + videoDOM + " to " + result.playback_speed);
    });
});