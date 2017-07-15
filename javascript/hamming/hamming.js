var Hamming = function() {}
Hamming.prototype.compute = function(first, second) {
	if(first.length != second.length) throw new Error('DNA strands must be of equal length.');
	
	var differences = 0; 
	for(i = 0; i < first.length; i++) {
		if(first[i] !== second[i]) differences++;
	}
	return differences;

}


module.exports = Hamming;