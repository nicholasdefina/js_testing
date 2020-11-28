const player = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
	movePlayer(e.key)
});

const getPosition = (position) => {
	if (position === null || position === '' || position === null){
		return 100;
	}
	return parseInt(position.slice(0,-2));
};

function movePlayer(pressedKey) {
	const up = ['ArrowUp', 'Up'];
	const down = ['ArrowDown', 'Down'];
	const left = ['ArrowLeft', 'Left'];
	const right = ['ArrowRight', 'Right'];
	if(![...up, ...down, ...left, ...right].includes(pressedKey)) {
		return;
	}
	let moveAmount = 50;
	if ([...up, ...down].includes(pressedKey)) {
		if (up.includes(pressedKey)) {
			moveAmount = -50;
		}
		moveVertical(player, moveAmount, getPosition(player.style.top));
	} else{
		if (left.includes(pressedKey)) {
			moveAmount = -50;
		}
		moveHorizontal(player, moveAmount, getPosition(player.style.left));
	}
	if (isTouching(player, coin)) {
		moveCoin();
	}
}
function moveVertical(element, movementAmount, currentPosition) {
	element.style.top = `${Math.max(currentPosition+movementAmount, 0)}px`
}

function moveHorizontal(element, movementAmount, currentPosition) {
	element.style.left = `${Math.max(currentPosition+movementAmount, 0)}px`
	const scale = movementAmount > 0 ? 'scale(1,1)' : 'scale(-1,1)';
	player.style.transform = scale;
}

const moveCoin = () => {
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;

}
moveCoin();

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}