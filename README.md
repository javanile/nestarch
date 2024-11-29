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
* [`nestarch plugins`](#nestarch-plugins)
* [`nestarch plugins add PLUGIN`](#nestarch-plugins-add-plugin)
* [`nestarch plugins:inspect PLUGIN...`](#nestarch-pluginsinspect-plugin)
* [`nestarch plugins install PLUGIN`](#nestarch-plugins-install-plugin)
* [`nestarch plugins link PATH`](#nestarch-plugins-link-path)
* [`nestarch plugins remove [PLUGIN]`](#nestarch-plugins-remove-plugin)
* [`nestarch plugins reset`](#nestarch-plugins-reset)
* [`nestarch plugins uninstall [PLUGIN]`](#nestarch-plugins-uninstall-plugin)
* [`nestarch plugins unlink [PLUGIN]`](#nestarch-plugins-unlink-plugin)
* [`nestarch plugins update`](#nestarch-plugins-update)

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

## `nestarch plugins`

List installed plugins.

```
USAGE
  $ nestarch plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ nestarch plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/index.ts)_

## `nestarch plugins add PLUGIN`

Installs a plugin into nestarch.

```
USAGE
  $ nestarch plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into nestarch.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the NESTARCH_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NESTARCH_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ nestarch plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ nestarch plugins add myplugin

  Install a plugin from a github url.

    $ nestarch plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ nestarch plugins add someuser/someplugin
```

## `nestarch plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ nestarch plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ nestarch plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/inspect.ts)_

## `nestarch plugins install PLUGIN`

Installs a plugin into nestarch.

```
USAGE
  $ nestarch plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into nestarch.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the NESTARCH_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NESTARCH_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ nestarch plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ nestarch plugins install myplugin

  Install a plugin from a github url.

    $ nestarch plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ nestarch plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/install.ts)_

## `nestarch plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ nestarch plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ nestarch plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/link.ts)_

## `nestarch plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ nestarch plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nestarch plugins unlink
  $ nestarch plugins remove

EXAMPLES
  $ nestarch plugins remove myplugin
```

## `nestarch plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ nestarch plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/reset.ts)_

## `nestarch plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ nestarch plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nestarch plugins unlink
  $ nestarch plugins remove

EXAMPLES
  $ nestarch plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/uninstall.ts)_

## `nestarch plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ nestarch plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nestarch plugins unlink
  $ nestarch plugins remove

EXAMPLES
  $ nestarch plugins unlink myplugin
```

## `nestarch plugins update`

Update installed plugins.

```
USAGE
  $ nestarch plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/update.ts)_
<!-- commandsstop -->
