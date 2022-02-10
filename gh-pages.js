var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/aronolof/hexviz.git',
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);