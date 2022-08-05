const darkModeButton = document.querySelector('#darkmode');
const readModeButton = document.querySelector('#readmode');
const appearence = document.querySelector('.appearance');
const body = document.querySelector('body');

darkModeButton.addEventListener('click', (e) => {
    body.classList.toggle("darkmode-enable");
})

readModeButton.addEventListener('click', (e) => {
    if (!document.fullscreenElement) {
        body.requestFullscreen().catch((err) => {
            alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
})