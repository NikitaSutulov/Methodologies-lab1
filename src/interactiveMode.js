import { solveQuadEqu } from './solveQuadEqu.js';


const startInteractiveMode = () => {
    const questions = [
        'a = ',
        'b = ',
        'c = '
    ];
    const params = [];

    //TODO: validation and error handling
    process.stdin.on('data', (data) => {
        if (params.length < questions.length) {
            const parsedData = parseFloat(data.toString());
            params.push(parsedData);
            if (params.length < questions.length) {
                process.stdout.write(questions[params.length]);
            } else {
                solveQuadEqu(...params);
                process.exit();
            }
        }
    });

    setTimeout(() => {
        process.stdout.write(questions[0]);
    }, 0);
    
};


export { startInteractiveMode };