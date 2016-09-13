//`main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
var Game = require('./game.js');
var inquirer = require('inquirer');

var game = new Game();

function startGame(){
	game.startNewGame();
	processInput();
}

function processInput(){
	//prompts for the user
	inquirer.prompt([
	{
		type: 'input',
		name: 'userGuess';
		message: 'Enter a letter a-z';
	}
	]).then(function(answer){
		if (game.letterUsed.indexOf(userGuess) === -1) {
			game.letterUsed.push(userGuess);
			var correct = game.word;
		}
	})
}

//start
startGame();