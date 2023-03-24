var ghpages = require('gh-pages');

ghpages.publish(
	'public',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/aronolof/hex-visualizer.git',
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);