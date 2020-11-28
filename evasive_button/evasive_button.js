const button = document.querySelector('button')

button.addEventListener('mouseover', () => {
    const randHeight = Math.floor(Math.random() * window.innerHeight);
    const randWidth = Math.floor(Math.random() * window.innerHeight);
    button.style.top = `${randHeight}px`;
    button.style.left = `${randWidth}px`;
});

button.addEventListener('click', ()=> {
    button.innerText = 'Lucky click! Try again.';
    document.body.style.backgroundColor = 'green';
})