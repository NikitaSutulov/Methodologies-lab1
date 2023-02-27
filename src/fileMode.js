import { solveQuadEqu } from './solveQuadEqu.js';
import { readFileSync } from 'fs';
import { validateFileStructure, validateFilePath, validateANotZero } from './validations.js'

const startFileMode = () => {
    const filePath = process.argv[2];
    validateFilePath(filePath);

    const fileData = readFileSync(filePath).toString();
    validateFileStructure(fileData);

    const params = fileData.trim('\n').split(' ').map((val) => parseFloat(val));
    validateANotZero(params[0]);
    
    solveQuadEqu(...params);
};

export { startFileMode };