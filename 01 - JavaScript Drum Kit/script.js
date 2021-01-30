addEventListener('keydown', function (e) {
    var keyCode = e.keyCode;
    var dataKey = "[data-key=\"" + keyCode + "\"]";
    var audio = document.querySelector("audio" + dataKey);
    var key = document.querySelector("div" + dataKey);
    if (!audio) {
        return;
    }
    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
    setTimeout(function () { key.classList.remove('playing'); }, 100);
});
