'use strict';

var fs = require('fs');
var words = fs.readFileSync('./vietname-stopwords.txt', 'utf8');

module.exports = words.split('\n').map(function(word) {
	return (word || '').trim();
}).filter(function(word) {
	return word !== false && word.length > 0;
})