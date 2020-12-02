const duration = document.querySelector('#duration')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let offset = 0;

let initialTime;
const timer = new Timer(duration, play, pause, {
    onStart(initialStartTime) {
        initialTime = initialStartTime;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', (perimeter * timeRemaining) / initialTime - perimeter);
    },
    onComplete() {
        circle.setAttribute('stroke-dashoffset', -perimeter);
    },
})