import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));