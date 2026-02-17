var styleText = require('node:util').styleText;

function main(){
	hello();
	goodbye();
}


function hello() {
let name = "";
if (process.argv[2]) {
	name = process.argv[2];
	console.log(`${styleText('blue', "Hello... ")}${styleText(['bold', 'red'], name)}`);
} else {
	console.log(styleText('blue', "Hello, World!"));
}
	}
function goodbye() {
	console.log(styleText('yellow', "Goodbye cruel World!"));
}

main();
