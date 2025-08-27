import {
	join
} from 'node:path';
import {
	readFile
} from 'node:fs/promises';
import * as yaml from 'js-yaml';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export async function readCv (datadir)
{
	const cv = yaml.load(
		await readFile(
			join(datadir, 'cv.yaml')
		)
	);

	return {
		cv, images : join(datadir, 'images')
	};
}
