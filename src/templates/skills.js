import {
	toKebabCase
} from './helpers/string.js';
import {
	toHtml
} from './helpers/markdown.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function renderSkill ({
	name,
	level,
	buzzwords,
	description
})
{
	return `<article class="skill">

		<h3 class="skill__name">
			${ name } <span class="skill__level skill__level--${ toKebabCase(level) }"> ${ level } </span>
		</h3>

		<ul class="tags skill__buzzwords">
			${ buzzwords.reduce((html, buzzword) => html + `<li class="tags__tag">
				${ buzzword }
			</li>`, '') }
		</ul>

		<div class="freeform skill__description">
			${ toHtml(description) }
		</div>

	</article>`;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function renderSkills ({
	skills
})
{
	return `<section class="section skills" id="skills">

		<h2 class="section__title">
			Skills
		</h2>

		<div class="section__content">
			${ skills.reduce((html, skill) => html + renderSkill(skill), '') }
		</div>

	</section>`;
}
