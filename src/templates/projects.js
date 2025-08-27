import {
	toSchemalessUrl
} from './helpers.js';
import {
	renderMarkdown
} from './markdown.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function renderProject ({
	name,
	url,
	description
})
{
	return `<article class="project">

		<header class="project__header">

			<h3 class="project__name">
				${ name }
			</h3>

			<a class="project__repository" href="${ url }" target="_blank" rel="noreferrer">
				${ toSchemalessUrl(url) }
			</a>

		</header>

		<div class="freeform project__description">
			${ renderMarkdown(description) }
		</div>

	</article>`;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderProjects ({
	projects
})
{
	return `<section class="section projects" id="projects">

		<h2 class="section__title">
			Personal Projects
		</h2>

		<div class="section__content">
			${ projects.reduce((html, project) => html + renderProject(project), '') }
		</div>

	</section>`;
}
