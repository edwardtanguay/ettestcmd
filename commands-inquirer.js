#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

const reactQuestions = [
	{
		type: 'input',
		name: 'name',
		message: chalk.hex('#a08c95').bold('project name:')
	},
	{
		type: 'list',
		name: 'framework',
		choices: [
			chalk.hex('#A7C7E7')('react'),
			chalk.green('vue'),
			chalk.hex('#ff7247')('angular')
		],
		message: chalk.hex('#a08c95').bold('selected framework: ')
	},
	{
		type: 'list',
		name: 'menu',
		choices: listMenu,
		message: chalk.hex('#a08c95').bold('react template with:  '),
		when: function (answers) {
			return answers['framework'] === chalk.hex('#A7C7E7')('react');
		}
	},
	{
		type: 'list',
		name: 'hooks',
		message: chalk.hex('#a08c95').bold('selected hook: '),
		choices: listHooks,
		when: function (answers) {
			return (
				answers['framework'] === chalk.hex('#A7C7E7')('react') &&
				answers['menu'] === 'simple page'
			);
		}
	},

	{
		type: 'list',
		name: 'backend',
		choices: ['yes', 'no'],
		message: chalk.hex('#a08c95').bold('need a backend? '),
		when: function (answers) {
			return (
				(answers['framework'] === chalk.hex('#A7C7E7')('react') &&
					answers['menu'] === 'simple page(nextjs/usecontext)' &&
					answers['menu'] === 'simple page') ||
				answers['menu'] === 'menu(zustand)' ||
				answers['menu'] === 'menu' ||
				answers['framework'] === chalk.green('vue') ||
				answers['framework'] === chalk.hex('#ff7247')('angular')
			);
		}
	},
	{
		type: 'input',
		name: 'connectionString',
		message: chalk.hex('#a08c95').bold('MongoDB connection string: '),
		when: function (answers) {
			return (
				answers['menu'] === 'member authentication(CRUD)' ||
				answers['menu'] === 'authentication and mongodb(CRUD API)'
			);
		}
	}
];

program
	.command('react')
	.argument('<directory>')
	.description(
		'this will create a React site in a directory'
	)
	.action((directory) => {
		console.log(`creating react site in: ${directory}`);
	});

program
	.command('vue')
	.argument('<directory>')
	.description(
		'this will create a Vue.js site in a directory'
	)
	.action((directory) => {
		console.log(`creating vue site in: ${directory}`);
	});

program.parse();

// Try the following:
//    node alias.js --help
//    node alias.js exec script
//    node alias.js ex script
//    node alias.js print file
//    node alias.js pr file
//    node alias.js show file
