import inquirer from 'inquirer';
import chalk from 'chalk';

console.log('');
console.log('Welcome to dpod, for help see: https://tanguay.eu');
console.log('');

const projectName = process.argv[2] ? process.argv[2] : '';

if (projectName !== '') {
	console.log(`${chalk.green('?')} ${chalk.bold('Project Name:')} ${chalk.hex('#198db6')(projectName)}`);
}

const questions = [
	{
		type: 'input',
		name: 'projectName',
		message: 'Project Name:',
		when: () => {
			return projectName === ''
		}
	},
	{
		type: 'list',
		name: 'framework',
		choices: [
			'React',
			'Vue.js',
			'Angular',
			'Next.js',
			'Svelte'
		],
		message: 'Framework:'
	}
];

const answers = await inquirer.prompt(questions);
console.log('ANSWERS', answers);