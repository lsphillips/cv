import './styles/cv.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import { onImageLoad }         from './enhancements/lazy-image-detector.js';
import { createEmailRevealer } from './enhancements/email-revealer.js';

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
