'use strict';

var fs = require('fs');
var path = require('path');

var words = fs.readFileSync(path.join(__dirname, './vietnamese-stopwords.txt'), 'utf8');

module.exports = words.split('\n').map(function(word) {
        return (word || '').trim();
}).filter(function(word) {
        return word !== false && word.length > 0;
})
