function deobfuscate (value)
{
	return atob(
		value.split('').reverse().join('')
	).replaceAll('[dot]', '.').replaceAll('[at]', '@').split('@').reverse().join('@');
}

function createLinkElement (text, className, href = '')
{
	const link = document.createElement('a');

	link.innerText = text;
	link.href      = href;
	link.className = className;

	return link;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function setup (obfuscatedEmail)
{
	const revealer = createLinkElement('Reveal email address', 'contact__link');

	revealer.addEventListener('click', event =>
	{
		event.preventDefault();

		const email = deobfuscate(obfuscatedEmail);

		revealer.parentNode.replaceChild(
			createLinkElement(email, 'contact__link', `mailto:${email}`), revealer
		);
	});

	document.querySelector('.contact__email')
		.replaceWith(revealer);
}
