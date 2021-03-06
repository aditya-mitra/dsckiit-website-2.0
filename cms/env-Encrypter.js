const fs = require('fs');
const crypto = require('crypto');
const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

var cryptSecret = '';

function setPassword() {
	console.log(
		'\x1b[31m',
		'You are setting new for env variables\n You will be prompted to enter a password for the encryption \n This includes - \t .env \t firebase-env.json',
		'\x1b[0m \n'
	);

	if (process.env.NODE_ENV !== 'production') {
		rl.question('enter password = ', (pass) => {
			cryptSecret = pass;
			console.log(
				'\n \x1b[34m',
				'\x1b[45m',
				'trying now to ENCRYPT above env files with given passphrase',
				'\x1b[0m \n'
			);
			rl.close();

			dotEnvEncrypter();
			firebaseEnvEncrypter();
		});
	}
}

function dotEnvEncrypter() {
	const fileContent = fs.readFileSync('.env', { encoding: 'utf8' });

	// encrypt this using crypto

	const secret = cryptSecret;
	const algo = 'aes-192-cbc';
	const key = crypto.scryptSync(secret, 'salt', 24);
	const iv = Buffer.alloc(16, 0);

	const cipher = crypto.createCipheriv(algo, key, iv);
	let encryptedText = cipher.update(fileContent, 'utf8', 'base64');
	encryptedText += cipher.final('base64');

	// make the file

	fs.writeFileSync('backend.env', encryptedText, { encoding: 'utf8' });

	console.log('\x1b[43m', 'backend.env file created', '\x1b[0m \n');
}

function firebaseEnvEncrypter() {
	const fileContent = fs.readFileSync('firebase-env.json', { encoding: 'utf8' });

	// encrypt this using crypto

	const secret = cryptSecret;
	const algo = 'aes-192-cbc';
	const key = crypto.scryptSync(secret, 'salt', 24);
	const iv = Buffer.alloc(16, 0);

	const cipher = crypto.createCipheriv(algo, key, iv);
	let encryptedText = cipher.update(fileContent, 'utf8', 'base64');
	encryptedText += cipher.final('base64');

	// make the file

	fs.writeFileSync('firebase-env', encryptedText, { encoding: 'utf8' });

	console.log('\x1b[43m', 'firebase-env file created', '\x1b[0m \n');
}

setPassword();
