
import { Command, Flags } from '@oclif/core';
import { parseModules } from '../../utils/parser.js';

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
        this.log((`Diagramma UML generato:\n\n${uml}`));
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