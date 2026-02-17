import {
	toHtml
} from './helpers/markdown.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderInterests ({
	interests
})
{
	return `<section class="section interests" id="interests">

		<h2 class="section__title">
			Interests &amp; Hobbies
		</h2>

		<div class="section__content">

			<ul class="tags interests__hobbies">
				${ interests.hobbies.reduce((html, hobby) => html + `<li class="tags__tag">
					${ hobby }
				</li>`, '') }
			</ul>

			<div class="freeform interests__summary">
				${ toHtml(interests.summary) }
			</div>

		</div>

	</section>`;
}
