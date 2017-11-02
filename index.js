window.addEventListener('keydown', playSound);

function playSound(e){
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
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