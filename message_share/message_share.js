const {hash} = window.location;
const message = atob(hash.replace('#', ''));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (event)=> {
    event.preventDefault();
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    const input = document.querySelector('#message-input').value;
    const encoded = btoa(input);
    const redirectUrl = `${window.location}#${encoded}`
    const linkInput = document.querySelector('#link-input');
    linkInput.setAttribute('value', redirectUrl);
    linkInput.select();
});
