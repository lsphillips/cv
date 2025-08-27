import {
	renderHeader
} from './header.js';
import {
	renderAbout
} from './about.js';
import {
	renderSkills
} from './skills.js';
import {
	renderExperience
} from './experience.js';
import {
	renderEducation
} from './education.js';
import {
	renderProjects
} from './projects.js';
import {
	renderInterests
} from './interests.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderIndex ({
	person,
	contact,
	skills,
	jobs,
	qualifications,
	projects,
	interests
}, urls)
{
	const keywords = person.keywords.join(',');

	return `<!DOCTYPE html>

	<html>

		<head>

			<title>
				${ person.name } - ${ person.tagline }
			</title>

			<meta charset="utf-8" />

			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<link rel="icon" href="${ urls.favicon('32x32.png') }" sizes="32x32" />
			<link rel="icon" href="${ urls.favicon('128x128.png') }" sizes="128x128" />
			<link rel="icon" href="${ urls.favicon('192x192.png') }" sizes="192x192" />
			<link rel="icon" href="${ urls.favicon('512x512.png') }" sizes="512x512" />

			<link rel="apple-touch-icon" href="${ urls.favicon('180x180.png') }" />

			<meta name="description" content="${ person.summary }" />

			<meta name="keywords" content="${ keywords }" />

			<link href="${ urls.stylesheet('index.css') }" rel="stylesheet" />

		</head>

		<body class="page">

			<div class="page__content">

				${ renderHeader({
					person,
					contact
				}, urls) }

				${ renderAbout({
					person
				}) }

				${ renderSkills({
					skills
				}) }

				${ renderExperience({
					jobs
				}, urls) }

				${ renderEducation({
					qualifications
				}) }

				${ renderProjects({
					projects
				}) }

				${ renderInterests({
					interests
				}) }

			</div>

			<script type="text/javascript">

				window.addEventListener('DOMContentLoaded', function ()
				{
					cv.enhance({
						email : '${ contact.email }'
					});
				});

			</script>

			<script type="text/javascript" src="${ urls.script('index.js') }"></script>

		</body>

	</html>
	`;
}
