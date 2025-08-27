import * as images   from './images.js';
import * as revealer from './revealer.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function enhance ({
	email
})
{
	// Images.
	images.setup();

	// Email Revealer.
	revealer.setup(email);
}
