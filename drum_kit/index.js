let drum_buttons = getButtons();
renderizeImages(drum_buttons);
let drum_sounds = initializeAudiosFiles(drum_buttons.length);
playSoundByClick(drum_buttons);
playSoundByPressingKey(drum_buttons, drum_sounds);

function getButtons() {
	return document.querySelectorAll("button");
}

function playSoundByClick(drum_buttons) {
	drum_buttons.forEach((button, index) => {
		button.addEventListener("click", function () {
			drum_sounds[index].play();
		});
	});
}

function playSoundByPressingKey(drum_buttons, drum_sounds) {
	document.addEventListener("keydown", (keyboard) => {
		drum_buttons.forEach((button, index) => {
			if (keyboard.key === button.textContent) drum_sounds[index].play();
		});
	});
}

function renderizeImages(drum_buttons) {
	let images_src_path = [
		"images/tom1.png",
		"images/tom2.png",
		"images/tom3.png",
		"images/tom4.png",
		"images/crash.png",
		"images/kick.png",
		"images/snare.png",
	];
	drum_buttons.forEach((button, index) => {
		button.style.backgroundImage = `url('${images_src_path[index]}')`;
	});
}

function initializeAudiosFiles(drum_buttons_lenght) {
	let audio_src_path = [
		"sounds/tom-1.mp3",
		"sounds/tom-2.mp3",
		"sounds/tom-3.mp3",
		"sounds/tom-4.mp3",
		"sounds/crash.mp3",
		"sounds/kick-bass.mp3",
		"sounds/snare.mp3",
	];
	let audios = new Array(drum_buttons_lenght);
	console.log(drum_buttons_lenght);
	for (let x = 0; x < audios.length; x++) {
		audios[x] = new Audio(audio_src_path[x]);
	}
	return audios;
}
