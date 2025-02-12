import '../styles/cv.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import { onImageLoad }         from './lazy-image-detector.js';
import { createEmailRevealer } from './email-revealer.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function enhance ({
	email
})
{
	// Email revealer.
	createEmailRevealer(document.querySelector('.contact__email'), email, {
		text      : 'Reveal email address',
		className : 'contact__link'
	});

	// Lazy images.
	onImageLoad(image =>
	{
		image.style.opacity = 1;

	}, true);
}
