import { startInteractiveMode } from './src/interactiveMode.js';
import { startFileMode } from './src/fileMode.js';

if (process.argv.length < 3) {
    startInteractiveMode();
} else {
    startFileMode();
}