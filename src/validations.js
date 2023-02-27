import { existsSync } from 'fs';

const validateFilePath = (filePath) => {
    if (!existsSync(filePath)) {
        console.error(`Error: file ${filePath} does not exist`);
        process.exit();
    }
};

const validateFileStructure = (data) => {
    // a regular expression to check if a string matches format 'number number number\n'
    const FORMAT_REGEXP = /^([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)(\r)?\n$/;
    if (!data.match(FORMAT_REGEXP)) {
        console.error(`Error: file ${filePath}: invalid file format`);
        process.exit();
    }
};

const validateANotZero = (a) => {
    if (a === 0) {
        console.error(`Error: a cannot be 0`);
        process.exit();
    }
};

export { validateFilePath, validateFileStructure, validateANotZero };