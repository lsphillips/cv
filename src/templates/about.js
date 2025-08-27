import {
	renderMarkdown
} from './markdown.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderAbout ({
	person
})
{
	return `<section class="section about" id="about">

		<h2 class="section__title">
			About
		</h2>

		<div class="freeform section__content">
			${ renderMarkdown(person.introduction) }
		</div>

	</section>`;
}
