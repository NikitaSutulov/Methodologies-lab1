import { solveQuadEqu } from './solveQuadEqu.js';
import { readFileSync, existsSync } from 'fs';

const startFileMode = () => {
    const filePath = process.argv[2];
    
    if (!existsSync(filePath)) {
        console.error(`Error: file ${filePath} does not exist`);
        process.exit();
    }
    const fileData = readFileSync(filePath).toString();
    if (!validateFileStructure(fileData)) {
        console.error(`Error: file ${filePath}: invalid file format`);
        process.exit();
    }

    const params = fileData.trim('\n').split(' ').map((val) => parseFloat(val));
    if (params[0] === 0) {
        console.error(`Error: file ${filePath}: a cannot be 0`);
        process.exit();
    }
    solveQuadEqu(...params);
};

const validateFileStructure = (data) => {
    // a regular expression to check if a string matches format 'number number number\n'
    const FORMAT_REGEXP = /^([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)\n$/;
    return data.match(FORMAT_REGEXP);
};

export { startFileMode };