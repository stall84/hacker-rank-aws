
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString: string = '';
// let inputLines: string[] = [];
// let currentLine: number = 0;

// process.stdin.on('data', (inputStdin: string): void => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function(): void {
//     inputLines = inputString.split('\n');
//     inputString = '';

//     main();
// });

// function readLine(): string {
//     return inputLines[currentLine++];
// }

// function main() {
//     const n: number = parseInt(readLine().trim(), 10);

//     const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     console.log('n: ', n);
//     console.log('arr: ', arr)
//     console.log('inputLines: ', inputLines)
// }