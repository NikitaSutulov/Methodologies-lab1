import { solveQuadEqu } from './solveQuadEqu.js';


const startInteractiveMode = () => {
    const questions = [
        'a = ',
        'b = ',
        'c = '
    ];
    const params = [];

    process.stdin.on('data', (data) => {
        if (params.length < questions.length) {
            const parsedData = parseFloat(data.toString());
            if (isNaN(parsedData)) {
                process.stdout.write(`Error: expected a real number, got ${data.toString()}`);
                process.stdout.write(questions[params.length]);
            } else if (parsedData === 0 && params.length == 0) {
                process.stdout.write(`Error: a cannot be 0\n`);
                process.stdout.write(questions[0]);
            } else {
                params.push(parsedData);
                if (params.length < questions.length) {
                    process.stdout.write(questions[params.length]);
                } else {
                    solveQuadEqu(...params);
                    process.exit();
                }
            } 
        }
    });

    process.stdout.write(questions[0]);

};


export { startInteractiveMode };