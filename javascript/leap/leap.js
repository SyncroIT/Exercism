//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
	this.number = input; 
};

Year.prototype.isLeap = function() {
	if(this.number % 4 == 0) {
		if(this.number % 100 == 0 && this.number % 400 != 0) return false;
		return true;
	} 
	return false;
};

module.exports = Year;
