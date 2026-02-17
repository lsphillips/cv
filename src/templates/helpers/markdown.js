import MarkdownIt from 'markdown-it';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function toHtml (markdown, {
	inline = false
} = {})
{
	return new MarkdownIt({
		html : true
	})[inline ? 'renderInline' : 'render'](
		markdown.trim()
	);
}
