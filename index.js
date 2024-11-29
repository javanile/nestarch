#!/usr/bin/env node
const yargs = require('yargs');
const chalk = require('chalk');

// Configurazione CLI con Yargs
yargs
    .scriptName('nestarch')
    .usage('$0 <command> [options]')
    .command(require('./src/commands/generate'))
    .command(require('./src/commands/help'))
    .demandCommand(1, chalk.red('Devi specificare un comando!'))
    .help()
    .alias('help', 'h')
    .version()
    .alias('version', 'v')
    .epilogue('NestArch: Analizza i tuoi progetti NestJS e genera diagrammi UML.')
    .parse();