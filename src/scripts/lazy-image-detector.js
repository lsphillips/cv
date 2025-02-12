export function onImageLoad (callback, retrospective = false)
{
	document.addEventListener('load', event =>
	{
		if (event.target.tagName.toLowerCase() === 'img')
		{
			callback(event.target);
		}

	}, true);

	if (retrospective)
	{
		Array.prototype.forEach.call(document.images, image =>
		{
			if (image.complete)
			{
				callback(image);
			}
		});
	}
}
