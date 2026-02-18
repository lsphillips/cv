import {
	toIsoDate
} from './helpers/string.js';
import {
	toHtml
} from './helpers/markdown.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function renderJobDate (date)
{
	return new Intl.DateTimeFormat('en', {
		month : 'long',
		year  : 'numeric'
	})
		.format(date);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderHtml ({
	jobs
}, urls)
{
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
					${ toHtml(project.summary, {
						inline : true
					}) }
				</p>
			</li>`, '') }
		</ul>`;
	}

	function renderJob ({
		logo,
		company,
		title,
		started,
		finished,
		description,
		projects
	})
	{
		return `<article class="job">

			${ logo ? `<img class="job__brand" src="${ urls.image(logo) }" alt="" loading="lazy" />` : '' }

			<header class="job__header">

				<h3 class="job__title">
					${ company }, ${ title }
				</h3>

				<small class="job__duration">
					<time datetime="${ toIsoDate(started) }"> ${ renderJobDate(started) } </time> &dash; ${ finished ? `<time datetime="${ toIsoDate(finished) }"> ${ renderJobDate(finished) } </time>` : 'Present' }
				</small>

			</header>

			<div class="freeform job__description">

				${ toHtml(description) }

				${ renderProjects({
					finished,
					projects
				}) }

			</div>

		</article>`;
	}

	return `<section class="section experience" id="experience">

		<h2 class="section__title">
			Experience
		</h2>

		<div class="section__content">
			${ jobs.reduce((html, job) => html + renderJob(job, urls), '') }
		</div>

	</section>`;
}

export function renderMarkdown ({
	jobs
})
{
	function renderProjects ({
		finished,
		projects
	})
	{
		return `${ finished ? 'Some examples of what I\'ve worked on were:' : 'Some examples of what I\'ve worked on are:' }

${ projects.map(project => `- **${ project.name }:** ${ project.summary.trim() }`).join('\n') }`;
	}

	function renderJob ({
		company,
		title,
		started,
		finished,
		description,
		projects
	})
	{
		const job = `### ${ company }, ${ title } (${ renderJobDate(started) } - ${ finished ? renderJobDate(finished) : 'Present' })

${ description.trim() }`;

		return projects ? job + '\n\n' + renderProjects({
			finished,
			projects
		}) : job;
	}

	return `## Experiences

${ jobs.map(job => renderJob(job)).join('\n\n') }`;
}
