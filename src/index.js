'use strict';

const REGEX = /\/[\*\/]»(?!«)(.|[\r\n]|\n)+?(?:\/\/«|«\*\/)/gm;

module.exports = function(str){

	let result  = '';
	let matches = String(str).match(REGEX);

	if (!matches) return result;

	for (let match of matches){
		match    = match.slice(3).slice(0, -3).split('*/');
		match[0] = match[0].replace(/^[ \t]/gm, '');

		if (match[1]) {
			match[0] += '\n```javascript' + match[1] + '\n\n```\n';
			match.pop();
		}

		result += match.join();
	}

	return result;
};