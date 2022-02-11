var ghpages = require('gh-pages');

console.log(ghpages);

ghpages.publish(
	'public',
	() => {
		console.log('Deploy Complete!');
	}
);