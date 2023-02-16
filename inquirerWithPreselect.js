import inquirer from 'inquirer';
import chalk from 'chalk';

console.log('');
banner('Welcome to dpod, for help see: https://tanguay.eu', 70);
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
		message: 'Project Name:'
	},
	{
		type: 'list',
		name: 'framework',
		choices: [
			'React',
			'Vue.js',
			'Angular',
			new inquirer.Separator(),
			'Next.js',
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
			return (['React', 'Next.js'].includes(answers['framework']));
		}
	},
	{
		type: 'password',
		name: 'adminPassword',
		message: 'Initial Admin Password:'
	},
	{
		type: 'number',
		name: 'num',
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
	console.log(chalk.bgHex('#333').hidden('x'.repeat(width)));
	const leftSideWidth = width / 2 - text.length / 2;
	let rightSideWidth = width / 2 - text.length / 2;
	// pad when odd-numbered length of text
	if (text.length % 2 === 1) {
		rightSideWidth++;
	}
	const leftSideSpace = chalk.bgHex('#333').hidden('x'.repeat(leftSideWidth));
	const rightSideSpace = chalk
		.bgHex('#333')
		.hidden('x'.repeat(rightSideWidth));
	const smartText = chalk.bgHex('#333').yellow(text);
	console.log(leftSideSpace + smartText + rightSideSpace);
	console.log(chalk.bgHex('#333').hidden('x'.repeat(width)));
}
