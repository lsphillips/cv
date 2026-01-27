import {
	formatToIsoDate
} from './helpers.js';
import {
	renderMarkdown
} from './markdown.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function renderProjects ({
	finished,
	projects
})
{
	if (!projects)
	{
		return '';
	}

	return `<p>
		${ finished ? 'Some examples of what I\'ve worked on were:' : 'Some examples of what I\'ve worked on are:' }
	</p>

	<ul>
		${ projects.reduce((html, project) => html + `<li>
			<h4> ${ project.name } </h4>
			<p>
				${ renderMarkdown(project.summary, {
					inline : true
				}) }
			</p>
		</li>`, '') }
	</ul>`;
}

function renderJobDate (date)
{
	return new Intl.DateTimeFormat('en', {
		month : 'long',
		year  : 'numeric'
	})
		.format(date);
}

function renderJob ({
	logo,
	company,
	title,
	started,
	finished,
	description,
	projects
}, {
	image
})
{
	return `<article class="job">

		${ logo ? `<img class="job__brand" src="${ image(logo) }" alt="" loading="lazy" />` : '' }

		<header class="job__header">

			<h3 class="job__title">
				${ company }, ${ title }
			</h3>

			<small class="job__duration">
				<time datetime="${ formatToIsoDate(started) }"> ${ renderJobDate(started) } </time> &dash; ${ finished ? `<time datetime="${ formatToIsoDate(finished) }"> ${ renderJobDate(finished) } </time>` : 'Present' }
			</small>

		</header>

		<div class="freeform job__description">

			${ renderMarkdown(description) }

			${ renderProjects({
				finished,
				projects
			}) }

		</div>

	</article>`;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderExperience ({
	jobs
}, urls)
{
	return `<section class="section experience" id="experience">

		<h2 class="section__title">
			Experience
		</h2>

		<div class="section__content">
			${ jobs.reduce((html, job) => html + renderJob(job, urls), '') }
		</div>

	</section>`;
}
