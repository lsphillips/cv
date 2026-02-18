import {
	toSchemalessUrl
} from './helpers/string.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderHtml ({
	person,
	contact
}, urls)
{
	return `<header class="introduction">

		<img class="introduction__avatar" src="${ urls.image(person.avatar) }" alt="" loading="lazy" />

		<h1 class="introduction__name">
			${ person.name }
		</h1>

		<h2 class="introduction__title">
			${ person.tagline }
		</h2>

	</header>

	<ul class="contact">

		<li class="contact__method">
			<span class="contact__vendor"> Email </span> <span class="contact__email"> Available on request </span>
		</li>

		<li class="contact__method">
			<span class="contact__vendor"> Phone </span> Available on request
		</li>

		<li class="contact__method">
			<span class="contact__vendor"> LinkedIn </span> <a class="contact__link" href="${ contact.linkedin }" target="_blank" rel="noreferrer">
				${ toSchemalessUrl(contact.linkedin) }
			</a>
		</li>

		<li class="contact__method">
			<span class="contact__vendor"> GitHub </span> <a class="contact__link" href="${ contact.github }" target="_blank" rel="noreferrer">
				${ toSchemalessUrl(contact.github) }
			</a>
		</li>

	</ul>`;
}

export function renderMarkdown ({
	person,
	contact
})
{
	return `# ${ person.name } - ${ person.tagline }

## Contact Information

- **Email:** Available on request
- **Phone:** Available on request
- **LinkedIn:** ${ contact.linkedin }
- **GitHub:** ${ contact.github }`;
}
