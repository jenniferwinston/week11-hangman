// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
//pass in latter into function


function Letter(character) {

	this.character = character;
	console.log(character);
	this.placeholder = "_";
	// appear false until proven true
	this.appear = false;

	this.letterIfs = function(){
		var chara = " ";
		if (this.appear == true){
			chara= this.character;
		}
		else {
			chara this.placeholder;
		}
		return chara;
	}
};

//export the constructor
module.exports = Letter;