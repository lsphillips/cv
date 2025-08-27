import moment from 'moment';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function formatDate (timestamp, format)
{
	return moment(timestamp).format(format);
}

export function toSchemalessUrl (url)
{
	return url.replace(/^\/\/|^.*?:\/\//, '');
}

export function toKebabCase (value)
{
	return value
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/\s+/g, '-')
		.toLowerCase();
}
