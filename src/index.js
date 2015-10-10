'use strict';

// TODO: Don't do a regex match, instead use esprima or something related.
const REGEX = /\/[/*]»(?!\/\/«|\*\/)((?:.|\r?\n)+?)(?:\/\/«|«\*\/)/gm;
const SPACR = /^\s/gm;

module.exports = function(str){

	let res = '';
	let matches = String(str).match(REGEX);

	if (!matches) return res;

	for (let match of matches){
		// remove openers and closers (always 3 in length)
		match = match.slice(3).slice(0, -3).replace(SPACR, '').trim();
		// detect if sourcecode should be added
		if (match.indexOf('*/') !== -1){
			match = match.split('*/');
			match[1] = match[1].trim();
			match = `${match[0]}\n\`\`\`javascript\n${match[1]}\n\`\`\`\n`;
		}
		res += match;
	}
	return res;
};