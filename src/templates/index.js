import * as header     from './header.js';
import * as about      from './about.js';
import * as skills     from './skills.js';
import * as experience from './experience.js';
import * as education  from './education.js';
import * as projects   from './projects.js';
import * as interests  from './interests.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderHtml (cv, urls)
{
	const keywords = cv.person.keywords.join(',');

	return `<!DOCTYPE html>

	<html>

		<head>

			<title>
				${ cv.person.name } - ${ cv.person.tagline }
			</title>

			<meta charset="utf-8" />

			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<link rel="icon" href="${ urls.favicon('32x32.png') }" sizes="32x32" />
			<link rel="icon" href="${ urls.favicon('128x128.png') }" sizes="128x128" />
			<link rel="icon" href="${ urls.favicon('192x192.png') }" sizes="192x192" />
			<link rel="icon" href="${ urls.favicon('512x512.png') }" sizes="512x512" />

			<link rel="apple-touch-icon" href="${ urls.favicon('180x180.png') }" />

			<meta name="description" content="${ cv.person.summary }" />

			<meta name="keywords" content="${ keywords }" />

			<link href="${ urls.stylesheet('index.css') }" rel="stylesheet" />

		</head>

		<body class="page">

			<div class="page__content">

				${ header.renderHtml(cv, urls)     }
				${ about.renderHtml(cv, urls)      }
				${ skills.renderHtml(cv, urls)     }
				${ experience.renderHtml(cv, urls) }
				${ education.renderHtml(cv, urls)  }
				${ projects.renderHtml(cv, urls)   }
				${ interests.renderHtml(cv, urls)  }

			</div>

			<script type="text/javascript">

				window.addEventListener('DOMContentLoaded', function ()
				{
					cv.enhance({
						email : '${ cv.contact.email }'
					});
				});

			</script>

			<script type="text/javascript" src="${ urls.script('index.js') }"></script>

		</body>

	</html>`;
}

export function renderMarkdown (cv, urls)
{
	return [
		header.renderMarkdown(cv, urls),
		about.renderMarkdown(cv, urls),
		skills.renderMarkdown(cv, urls),
		experience.renderMarkdown(cv, urls),
		education.renderMarkdown(cv, urls),
		projects.renderMarkdown(cv, urls),
		interests.renderMarkdown(cv, urls)
	]
		.join('\n\n');
}
