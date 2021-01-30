
addEventListener('keydown', (e) => {
    const { keyCode } = e;
    const dataKey = `[data-key="${keyCode}"]`
    const audio: HTMLAudioElement | undefined = document.querySelector(`audio${dataKey}`);
    const key = document.querySelector(`div${dataKey}`);
    if(!audio) {
        return;
    }

    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
    setTimeout( ()=> {key.classList.remove('playing')}, 100 );
});
