function checkWinner() {
	let title = document.querySelector("h1");
	let dicee_results = generateRadomValues();
	console.log(dicee_results);
	changeDiceeImages(dicee_results);
	selectWinner(title, dicee_results);
}

function generateRadomValues() {
	let arr = new Array();
	for (let x = 0; x < 2; x++) {
		let value = Math.floor(Math.random() * 6 + 1);
		arr.push(value);
	}
	return arr;
}

function getPlayersDiceeImagesTags() {
	let arr = new Array();
	let player1 = document.querySelector(".img1");
	let player2 = document.querySelector(".img2");
	arr.push(player1);
	arr.push(player2);
	return arr;
}

function changePlayerSrcAccordingToResult() {
    
}

function changeDiceeImages(dicee_results) {
	let players_dicee_images_tags = new Array();
	players_dicee_images_tags= getPlayersDiceeImagesTags();
	dicee_results.forEach((value, index) => {
		switch (value) {
			case 1:
				players_dicee_images_tags[index].src = "images/dice1.png";
				break;
			case 2:
				players_dicee_images_tags[index].src = "images/dice2.png";
				break;
			case 3:
				players_dicee_images_tags[index].src = "images/dice3.png";
				break;
			case 4:
				players_dicee_images_tags[index].src = "images/dice4.png";
				break;
			case 5:
				players_dicee_images_tags[index].src = "images/dice5.png";
				break;
			case 6:
				players_dicee_images_tags[index].src = "images/dice6.png";
				break;
			default:
				break;
		}
	});
}

function selectWinner(title, dicee_results) {
	if (dicee_results[0] > dicee_results[1]) {
		title.textContent = "🚩Player 1 wins";
	} else if (dicee_results[0] < dicee_results[1]) {
		title.textContent = "Player 2 wins🚩";
	} else {
		title.textContent = "Draw";
	}
}
