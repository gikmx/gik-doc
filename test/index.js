'use strict';

const FS     = require('fs');
const Path   = require('path');

const FaiDoc = require('../build');

let code = FS.readFileSync(Path.join(__dirname, 'example.js'),'utf-8');
let mark = FS.readFileSync(Path.join(__dirname, 'example.md'),'utf-8');

describe('FaiDoc', function(){

	it('should do as advertised', function(){
		let doc = FaiDoc(code);
		expect(doc).to.equal(mark);
	});

});