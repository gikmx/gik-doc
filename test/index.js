'use strict';

const FS     = require('fs');
const Path   = require('path');

const FaiDoc = require('../build');

let code = FS.readFileSync(Path.join(__dirname, '..', 'example', 'test.js'), 'utf-8');
let mark = FS.readFileSync(Path.join(__dirname, '..', 'example', 'test.md'), 'utf-8');

describe('FaiDoc', function(){

	it('should do as advertised', function(){
		let doc = FaiDoc(code);
		expect(doc).to.equal(mark);
	});

	it('should handle empty results', function(){
		let fn = ()=> FaiDoc('');
		expect(fn).to.not.throw(Error);
		expect(fn()).to.equal('');
	});

});