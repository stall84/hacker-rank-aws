"use strict";
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let inputLines = [];
let currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
function main() {
    const queue = [];
    const stack1 = [];
    const stack2 = [];
    const querySize = parseInt(readLine());
    for (let i = 0; i < querySize; i++) {
        let input = readLine();
        let prefix = input[0];
        // Remember for-each is going to be a left-to-right operation.. You'll have to use a while loop to 
        // transfer stack1 to the temp stack2 by popping each element
        switch (prefix) {
            case '1':
                while (stack1.length != 0) {
                    stack2.push(stack1.pop());
                }
                stack1.push(input.slice(1, input.length));
                while (stack2.length != 0) {
                    stack1.push(stack2.pop());
                }
                break;
            case '2':
                stack1.pop();
                break;
            case '3':
                console.log(stack1[stack1.length - 1]);
                break;
            default:
                break;
        }
    }
}
