// file will randomly select a word for the player.

var Word = require('./word.js');

var wordBank: ['hersheys', 'almondjoy', 'reeses', 'snickers', 'milkyway', 'kitkat', 'twix'];

function Game(){
	//clear values at start of game
	this.wins = 0;
	this.losses = 0;
	this.lives = 0;
	this.letterUsed = [];
	this.word;

	this.startNewGame = function(){
		this.lives = 10;
		this.letterUsed = [];
		this.word = this.generateWord();
	};
	this.generateWord = function(){
		var random = wordBank[Math.floor(Math.random()* wordBank.length)];
		var current = new Word(random);
		return current;
	}
}