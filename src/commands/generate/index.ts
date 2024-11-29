
import { Command, Flags } from '@oclif/core';
import * as fs from 'node:fs';

import { parseModules } from '../../services/parser.js';

export default class Generate extends Command {
    static description = 'Genera un diagramma UML dei moduli NestJS';

    static flags = {
        output: Flags.string({
            char: 'o',
            default: 'modules.puml',
            description: 'File di output per il diagramma UML',
        }),
        path: Flags.string({
            char: 'p',
            default: 'src/',
            description: 'Percorso alla codebase NestJS',
        }),
    };

    generatePlantUML(modules: { imports: string[]; name: string }[]): string {
        const lines = ['@startuml', 'skinparam componentStyle rectangle'];
        for (const { imports, name } of modules) {
            lines.push(`component ${name}`);
            for (const imp of imports) {
                lines.push(`${name} --> ${imp}`);
            }
        }

        lines.push('@enduml');
        return lines.join('\n');
    }

    async run() {
        const { flags } = await this.parse(Generate);
        this.log((`Analizzo il percorso: ${flags.path}`));

        const modules = parseModules(flags.path);

        console.log(modules);

        if (modules.length === 0) {
            this.error(('Nessun modulo trovato nella codebase.'));
        }

        const uml = this.generatePlantUML(modules);
        // Se è stato specificato un file di output, lo salviamo
        if (flags.output) {
            fs.writeFileSync(flags.output, uml);
            this.log(`Diagramma salvato in: ${flags.output}`);
        } else {
            // Altrimenti, stampa sulla console
            this.log(uml);
        }
    }
}
