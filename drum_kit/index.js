let drum_buttons = document.querySelectorAll("button");

let drum_sounds = initializeAudiosFiles(drum_buttons.length);
drum_buttons.forEach((button, index) => {
	button.addEventListener("click", function () {
		drum_sounds[index].play();
		// console.log(drum_sounds.length);
	});
	// button.addEventListener("keypress", (key) => {
	// 	let name = key.key;
	// 	alert(name);
	// });
});

function initializeAudiosFiles(drum_buttons_lenght) {
	let audio_src_path = [
		"sounds/crash.mp3",
		"sounds/kick-bass.mp3",
		"sounds/snare.mp3",
		"sounds/tom-1.mp3",
		"sounds/tom-2.mp3",
		"sounds/tom-3.mp3",
		"sounds/tom-4.mp3",
	];
	let audios = new Array(drum_buttons_lenght);
	console.log(drum_buttons_lenght);
	for (let x = 0; x < audios.length; x++) {
		audios[x] = new Audio(audio_src_path[x]);
	}
	return audios;
}
