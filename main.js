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
		// validate user guess
		validate: function(value){
			var valid = /[a-z]/i;
			if (value.length === 1 && valid.test(value)){
				return true;
			}
			else { return 'Enter a valid guess'; }
		}
	}
	]).then(function(answer){

	})
}

//start
startGame();