import { solveQuadEqu } from './src/solveQuadEqu.js';
import { startInteractiveMode } from './src/interactiveMode.js';
import { startFileMode } from './src/fileMode.js';

if (process.argv.length < 3) {
    startInteractiveMode();
} else {
    startFileMode();
}

console.log();