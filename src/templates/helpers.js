export function formatToIsoDate (timestamp)
{
	return new Date(timestamp).toISOString().slice(0, 10);
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
