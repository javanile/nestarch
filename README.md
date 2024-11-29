nestarch
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nestarch.svg)](https://npmjs.org/package/nestarch)
[![Downloads/week](https://img.shields.io/npm/dw/nestarch.svg)](https://npmjs.org/package/nestarch)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g nestarch
$ nestarch COMMAND
running command...
$ nestarch (--version)
nestarch/0.0.0 linux-x64 node-v20.17.0
$ nestarch --help [COMMAND]
USAGE
  $ nestarch COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nestarch generate`](#nestarch-generate)
* [`nestarch help [COMMAND]`](#nestarch-help-command)

## `nestarch generate`

Genera un diagramma UML dei moduli NestJS

```
USAGE
  $ nestarch generate [-p <value>] [-o <value>]

FLAGS
  -o, --output=<value>  [default: modules.puml] File di output per il diagramma UML
  -p, --path=<value>    [default: src/] Percorso alla codebase NestJS

DESCRIPTION
  Genera un diagramma UML dei moduli NestJS
```

_See code: [src/commands/generate/index.ts](https://github.com/francescobianco/nestarch/blob/v0.0.0/src/commands/generate/index.ts)_

## `nestarch help [COMMAND]`

Display help for nestarch.

```
USAGE
  $ nestarch help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for nestarch.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.18/src/commands/help.ts)_
<!-- commandsstop -->
