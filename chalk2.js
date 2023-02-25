import chalk from 'chalk';

const barBackgroundColor = chalk.hex('#000');
const barForegroundColor = chalk.hex('#b61e13');
console.log(
	chalk.blue(
		`Please ${barForegroundColor('read the instructionsbbb')} before you proceed.`
	)
);

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));


console.log(chalk.rgb(255, 136, 0).bold('Orange!'));