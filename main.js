var styleText = require('node:util').styleText;

function main(){

let name = "";
if (process.argv[2]) {
	name = process.argv[2];
	console.log(`${styleText('blue', "Hello... ")}${styleText(['bold', 'red'], name)}`);
} else {
	console.log(styleText('blue', "Hello, World!"));
}
	console.log(styleText('yellow', "Goodbye, World!"));
}

main();

