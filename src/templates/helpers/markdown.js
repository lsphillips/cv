import MarkdownIt from 'markdown-it';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function markdown ({
	fn, hash = {}
})
{
	const {
		inline = false
	} = hash;

	return new MarkdownIt({
		html : true
	})[inline ? 'renderInline' : 'render'](
		fn(this).trim() // eslint-disable-line no-invalid-this
	);
}
