import {
	toHtml
} from './helpers/markdown.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderHtml ({
	person
})
{
	return `<section class="section about" id="about">

		<h2 class="section__title">
			About
		</h2>

		<div class="freeform section__content">
			${ toHtml(person.introduction) }
		</div>

	</section>`;
}

export function renderMarkdown ({
	person
})
{
	return `## About

${ person.introduction.trim() }`;
}
