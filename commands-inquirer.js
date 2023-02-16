#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

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
