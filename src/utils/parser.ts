import { Project, SourceFile } from 'ts-morph';

export interface ModuleInfo {
    name: string;
    imports: string[];
}

export function parseModules(path: string): ModuleInfo[] {
    // Crea un progetto ts-morph
    const project = new Project();

    // Aggiunge tutti i file con estensione .module.ts nella directory specificata
    project.addSourceFilesAtPaths(`${path}/**/*.module.ts`);

    // Analizza ogni file trovato
    const modules: ModuleInfo[] = project.getSourceFiles().map((sourceFile) => extractModuleInfo(sourceFile));

    return modules;
}

function extractModuleInfo(sourceFile: SourceFile): ModuleInfo {
    // Nome del modulo (nome del file senza estensione)
    const name = sourceFile.getBaseNameWithoutExtension();

    // Trova tutte le dichiarazioni di import nel file
    const imports = sourceFile
        .getImportDeclarations()
        .map((importDecl) => importDecl.getModuleSpecifierValue()) // Ottiene il valore del modulo importato
        .filter((moduleSpecifier) => moduleSpecifier.endsWith('.module')); // Filtra per importazioni di moduli NestJS

    return { name, imports };
}
