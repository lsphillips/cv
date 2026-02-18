import {
	toSchemalessUrl
} from './helpers/string.js';
import {
	toHtml
} from './helpers/markdown.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderHtml ({
	projects
})
{
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
				${ toHtml(description) }
			</div>

		</article>`;
	}

	return `<section class="section projects" id="projects">

		<h2 class="section__title">
			Personal Projects
		</h2>

		<div class="section__content">
			${ projects.reduce((html, project) => html + renderProject(project), '') }
		</div>

	</section>`;
}

export function renderMarkdown ({
	projects
})
{
	function renderProject ({
		name,
		url,
		description
	})
	{
		return `### [${name}](${url})

${ description.trim() }`;
	}

	return `## Personal Projects

${ projects.map(project => renderProject(project)).join('\n\n') }`;
}
