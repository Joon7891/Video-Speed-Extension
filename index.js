chrome.storage.local.get(['playback_speed'], function(result) {
    document.getElementById('playback_speed').textContent = result.playback_speed;
});