// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
//pass in latter into function
var Letter = function(latter) {
	this.chara = latter;
	console.log(latter);
	// appear false until proven true
	this.appear = false;
	this.letterIfs = function(){
		if (this.appear == true){
			return this.chara;
		}
		else if (this.chara === ' ') {
			this.appear = true;
			return this.chara;
		}
		else {
			return " ";
		}

	}
};

//export the constructor
exports.Letter = Letter;