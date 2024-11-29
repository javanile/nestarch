
import { Command, Flags } from '@oclif/core';
import { parseModules } from '../../services/parser.js';
import * as fs from 'fs';

export default class Generate extends Command {
    static description = 'Genera un diagramma UML dei moduli NestJS';

    static flags = {
        path: Flags.string({
            char: 'p',
            description: 'Percorso alla codebase NestJS',
            default: 'src/',
        }),
        output: Flags.string({
            char: 'o',
            description: 'File di output per il diagramma UML',
            default: 'modules.puml',
        }),
    };

    async run() {
        const { flags } = await this.parse(Generate);
        this.log((`Analizzo il percorso: ${flags.path}`));

        const modules = parseModules(flags.path);
        if (!modules.length) {
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

    generatePlantUML(modules: { name: string; imports: string[] }[]): string {
        const lines = ['@startuml', 'skinparam componentStyle rectangle'];
        modules.forEach(({ name, imports }) => {
            lines.push(`component ${name}`);
            imports.forEach((imp) => {
                lines.push(`${name} --> ${imp}`);
            });
        });
        lines.push('@enduml');
        return lines.join('\n');
    }
}
