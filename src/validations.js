import { existsSync } from 'fs';

const validateFilePath = (filePath) => {
    if (!existsSync(filePath)) {
        console.log(`Error: file ${filePath} does not exist`);
        //exit code is 404, similar to HTTP Not Found status code
        process.exit(404);
    }
};

const validateFileStructure = (data) => {
    // a regular expression to check if a string matches format 'number number number\n'
    const FORMAT_REGEXP = /^([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)(\r)?\n$/;
    if (!data.match(FORMAT_REGEXP)) {
        console.log(`Error: invalid file format`);
        //exit code is 400, similar to HTTP Bad Request status code
        process.exit(400);
    }
};

const validateANotZero = (a) => {
    if (a === 0) {
        console.log(`Error: a cannot be 0`);
        //exit code is 400, similar to HTTP Bad Request status code
        process.exit(400);
    }
};

export { validateFilePath, validateFileStructure, validateANotZero };