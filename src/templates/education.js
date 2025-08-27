import {
	formatDate
} from './helpers.js';
import {
	renderMarkdown
} from './markdown.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function renderQualification ({
	name,
	school,
	started,
	completed,
	description
})
{
	return `<article class="qualification">

		<header class="qualification__header">

			<h3 class="qualification__title">
				${ name }
			</h3>

			<small class="qualification__school">
				${ school } &middot; <time datetime="${ formatDate(started, 'YYYY-MM-DD') }"> ${ formatDate(started, 'YYYY') } </time> &dash; <time datetime="${ formatDate(completed, 'YYYY-MM-DD') }"> ${ formatDate(completed, 'YYYY') } </time>
			</small>

		</header>

		<div class="freeform qualification__description">
			${ renderMarkdown(description) }
		</div>

	</article>`;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderEducation ({
	qualifications
})
{
	return `<section class="section education" id="education">

		<h2 class="section__title">
			Education
		</h2>

		<div class="section__content">
			${ qualifications.reduce((html, qualification) => html + renderQualification(qualification), '') }
		</div>

	</section>`;
}
