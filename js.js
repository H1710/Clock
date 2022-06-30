
function loadVietNamDate() {
    const hours = new Date();
    if(document.querySelector('.vietnam-hours'))
        document.querySelector('.vietnam-hours').innerText = hours.getHours();
    const minutes = new Date();
    if(document.querySelector('.vietnam-minutes'))
        document.querySelector('.vietnam-minutes').innerText = minutes.getMinutes();
    const seconds = new Date();
    if(document.querySelector('.vietnam-seconds'))
        document.querySelector('.vietnam-seconds').innerText = seconds.getSeconds();
}

console.log()

function loadUSDate() {
    const hours = new Date();
    if(document.querySelector('.us-hours')) {
        if(hours.getHours() + 10 >= 24) {
            document.querySelector('.us-hours').innerText = hours.getHours() + 10 - 24;
        } else {
            document.querySelector('.us-hours').innerText = hours.getHours();
        }
    }
    const minutes = new Date();
    if(document.querySelector('.us-minutes'))
        document.querySelector('.us-minutes').innerText = minutes.getMinutes();
    const seconds = new Date();
    if(document.querySelector('.us-seconds'))
        document.querySelector('.us-seconds').innerText = seconds.getSeconds();
}

// loadVietNamDate();
setInterval(loadVietNamDate, 1000);
setInterval(loadUSDate, 1000);
