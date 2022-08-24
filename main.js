const darkModeButton = document.querySelector('#darkmode');
const darkModeButtonSmartphone = document.querySelector('#darkmode-s');
const readModeButton = document.querySelector('#readmode');
const paragraphys = document.querySelector('p');
const body = document.querySelector('body');

darkModeButton.addEventListener('click', (e) => {
    body.classList.toggle("darkmode-enable");
})
darkModeButtonSmartphone.addEventListener('click', (e) => {
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