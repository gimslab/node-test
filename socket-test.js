const net = require('net');
const readline = require('readline');

const client = net.connect({host: 'n54l', port:9999}, () => {
	console.log('connected to server!');
	client.write('world!\n');
});
client.on('data', (data) => {
	console.log(data.toString());
//	client.end();
});
client.on('end', () => {
	console.log('disconnected from server');
});

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('> ');
rl.prompt();

rl.on('line', (line) => {
	client.write(line);
	rl.prompt();
}).on('close', () => {
	console.log('bye');
	process.exit(0);
});
