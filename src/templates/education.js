import {
	toIsoDate
} from './helpers/string.js';
import {
	toHtml
} from './helpers/markdown.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function renderQualificationDate (date)
{
	return new Date(date).getFullYear();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderHtml ({
	qualifications
})
{
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
					${ school } &middot; <time datetime="${ toIsoDate(started) }"> ${ renderQualificationDate(started) } </time> &dash; <time datetime="${ toIsoDate(completed) }"> ${ renderQualificationDate(completed) } </time>
				</small>

			</header>

			<div class="freeform qualification__description">
				${ toHtml(description) }
			</div>

		</article>`;
	}

	return `<section class="section education" id="education">

		<h2 class="section__title">
			Education
		</h2>

		<div class="section__content">
			${ qualifications.reduce((html, qualification) => html + renderQualification(qualification), '') }
		</div>

	</section>`;
}

export function renderMarkdown ({
	qualifications
})
{
	function renderQualification ({
		name,
		school,
		started,
		completed,
		description
	})
	{
		return `### ${name}

${ school }, ${ renderQualificationDate(started) } - ${ renderQualificationDate(completed) }

${ description.trim() }`;
	}

	return `## Education

${ qualifications.map(qualification => renderQualification(qualification)).join('\n\n') }`;
}
