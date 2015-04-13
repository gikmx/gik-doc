'use strict';

/*» ### I am a subtitle
	I am a description.

	- I am a bullet
	- I am another bullet
*/

let foo = 'bar'; //«

/*» I am a paragraph using a multi line comment, which wont have a newline «*/

// I am ignored
/* I am ignored too */
let ignored = true;

//» and I'm still part of the same paragraph, but I'm a single line comment //«
let shown = false;

//» I will be ignored, because I don't have a 'closer'.

/*»
	I won't be shown, nor everything belowe me, since I don't have a 'closer'.
*/

class Test {

	constructor(x=true){
		this.x = x;
	}
}

let test = new Test();