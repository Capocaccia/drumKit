window.addEventListener('keydown', playSound);

window.addEventListener('click', playSound);

function playSound(e){
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) !== null ? document.querySelector(`audio[data-key="${e.keyCode}"]`) : document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`) !== null ? document.querySelector(`.key[data-key="${e.keyCode}"]`) : document.querySelector(`.key[data-key="${e.target.dataset.key}"]`);
	var keys = document.querySelectorAll('.key');

	if(!audio) return;
	
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
	
	if(!keys) return;

	function removeTransition(e){
		if(e.propertyName !== 'transform') return;
		this.classList.remove('playing');
	}

	keys.forEach(function(key) {
		key.addEventListener('transitionend', removeTransition)
	})

}