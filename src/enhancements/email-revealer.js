function createLinkElement (text, href, className)
{
	const link = document.createElement('a');

	link.innerText = text;
	link.href      = href;
	link.className = className;

	return link;
}

function deobfuscate (value)
{
	return atob(
		value.split('').reverse().join('')
	).replaceAll('[dot]', '.').replaceAll('[at]', '@').split('@').reverse().join('@');
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function createEmailRevealer (fallback, obfuscatedEmail, {
	text,
	className
})
{
	const revealer = createLinkElement(text, '', className);

	revealer.addEventListener('click', event =>
	{
		event.preventDefault();

		const email = deobfuscate(obfuscatedEmail);

		revealer.parentNode.replaceChild(
			createLinkElement(email, `mailto:${email}`, className), revealer
		);
	});

	fallback.parentNode.replaceChild(revealer, fallback);
}
