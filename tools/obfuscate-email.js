function obfuscate (email)
{
	return Buffer.from(
		email.trim().split('@').reverse().join('@').replaceAll('@', '[at]').replaceAll('.', '[dot]')
	)
		.toString('base64').split('').reverse().join('');
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

console.log(
	process.argv[2] + ' => ' + obfuscate(process.argv[2])
);
