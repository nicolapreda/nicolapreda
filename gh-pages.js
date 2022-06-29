import { publish } from 'gh-pages';

publish(
    'build', {
        branch: 'gh-pages',
        repo: 'https://github.com/nicolapreda/nicolapreda.git',
        user: {
            name: 'nicolapreda',
            email: 'nicola.preda05@gmail.com',
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);