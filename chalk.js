import chalk from 'chalk';

separator('basic');
console.log(chalk.blue('testing'));
console.log(chalk.red('testing'));
console.log(chalk.yellow('testing'));
console.log(chalk.green('testing'));
separator('nesting');
console.log(
	chalk.blue(
		`There is a difference between ${chalk.yellow(
			'object-oriented programming'
		)} and ${chalk.yellow('functional programming')}.`
	)
);
const barBackgroundColor = chalk.hex('#000');
const barForegroundColor = chalk.hex('#b61e13');
console.log(
	chalk.blue(
		`Please ${barForegroundColor('read the instructionsbbb')} before you proceed.`
	)
);
console.log(
	chalk.blue(
		`This is a bar: ${chalk.bgHex('#000').hex('#000').bold('xxxxxxxx')} : in the middle of text.`
	)
);
console.log(
	chalk.blue(
		`Please ${chalk.gray.bgGray('this is red')} before you proceed.`
	)
);
console.log(
	chalk.blue(
		`Please ${chalk.red.bgYellowBright.bold(
			'read the instructions'
		)} before you proceed.`
	)
);
separator('custom names');
const warning = chalk.hex('#FFA500').bold; // Orange color
console.log(
	chalk.blue(`Please ${warning('see the errors below')} before proceeding.`)
);
separator('remember you can use string substitution');
const tools = ['React', 'Vue.js'];
console.log('You can use %s or %s.', tools[0], tools[1]);
console.log(chalk.blue('You can use %s or %s.'), tools[0], tools[1]);
separator('hex');
console.log(chalk.bgHex('#333').hex('#888')('This is a note.'));
separator('banners');
banner('Step 1: Prepare for Installation', 50);
console.log(chalk.blue('- do this'));
console.log(chalk.blue('- do this'));
console.log(chalk.blue('- do this'));
banner('Step 2: Install the Software', 50);
console.log(chalk.blue('- do this'));
console.log(chalk.blue('- do this'));
console.log(chalk.blue('- do this'));

function separator(title) {
	console.log('='.repeat(100));
	console.log(chalk.whiteBright.bold(title.toUpperCase()));
	console.log('='.repeat(100));
}

function banner(text, width = 100) {
	console.log(chalk.bgGray.gray('x'.repeat(width)));
	const leftSideWidth = width / 2 - text.length / 2;
	let rightSideWidth = width / 2 - text.length / 2;
	// pad when odd-numbered length of text
	if (text.length % 2 === 1) {
		rightSideWidth++;
	}
	const leftSideSpace = chalk.bgGray.gray.hidden('x'.repeat(leftSideWidth));
	const rightSideSpace = chalk.bgGray.gray.hidden('x'.repeat(rightSideWidth));
	const smartText = chalk.bgGray.gray.yellow(text);
	console.log(leftSideSpace + smartText + rightSideSpace);
	console.log(chalk.bgGray.gray.hidden('x'.repeat(width)));
}
