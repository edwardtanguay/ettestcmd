import inquirer from 'inquirer';
import chalk from 'chalk';

console.log('');
banner('Welcome to dpod, for more info: https://tanguay.eu', 70);
console.log('');

const numberValidator = async (input) => {
	const num = Number(input);
	if (input === '' || isNaN(num)) {
		console.log(' <-- Please enter a number.');
		input = '';
		return false;
	}
	return true;
};

const questions = [
	{
		type: 'input',
		name: 'projectName',
		message: 'Project Name:',
		validate: async (input) => {
			if (input.trim() === '') {
				console.log(' <-- project name is required');
				return false;
			} else {
				return true;
			}
		}
	},
	{
		type: 'list',
		name: 'framework',
		choices: [
			'React',
			'Vue.js',
			'Angular',
			new inquirer.Separator(),
			'Next.js - https://starters.tanguay.eu/list/nextJsMenuTypeScriptUsecontextTailwind',
			'Svelte'
		],
		default: 'Next.js',
		message: 'Framework:'
	},
	{
		type: 'list',
		name: 'language',
		loop: false,
		choices: ['JavaScript', 'TypeScript'],
		message: 'Language:'
	},
	{
		type: 'checkbox',
		name: 'features',
		choices: ['useState', 'useEffect', 'useContext', 'useReducer'],
		message: 'Features:',
		when: (answers) => {
			const fw = answers['framework'];
			return (fw.startsWith('React') || fw.startsWith('Next'));
		}
	},
	{
		type: 'password',
		name: 'adminPassword',
		message: 'Initial Admin Password:'
	},
	{
		type: 'number',
		name: 'numberOfPages',
		message: 'How many pages:',
		validate: numberValidator,
		filter: (input) => {
			const num = Number(input);
			if (input === '' || isNaN(num)) {
				return '';
			} else {
				return input;
			}
		}
	}
];

const answers = await inquirer.prompt(questions);
console.log('ANSWERS', answers);

function banner(text, width = 100) {
	text = ` ${text} `;
	console.log(chalk.bgYellowBright.hidden('x'.repeat(width)));
	const leftSideWidth = width / 2 - text.length / 2;
	let rightSideWidth = width / 2 - text.length / 2;
	// pad when odd-numbered length of text
	if (text.length % 2 === 1) {
		rightSideWidth++;
	}
	const leftSideSpace = chalk.bgHex('#000000').hidden('x'.repeat(leftSideWidth));
	const rightSideSpace = chalk
		.bgHex('#333')
		.hidden('x'.repeat(rightSideWidth));
	const smartText = chalk.bgHex('#333').yellow(text);
	console.log(leftSideSpace + smartText + rightSideSpace);
	console.log(chalk.bgHex('#333').hidden('x'.repeat(width)));
}