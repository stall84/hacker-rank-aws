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
    // This implementation of a 2-stack queue is likely the costliest, but simplest to implement. 
    // In adherence to the stack and queue principles. Any enqueued element will incur a costly 
    // process where the entire contents of the 1st stack is popped off into the temporary stack2
    // whatever new element is added to stack1, thereafter stack2 pops all of it's members back off
    // to stack1, thus ensuring the first element into this main function will be the first out
    const stack1 = [];
    const stack2 = [];
    for (let i of inputLines) {
        const operation = i.split(" ");
        if (operation[0] === '1') {
            stack1.push(operation[1]);
        }
        else if (operation[0] === '2') {
            if (stack2.length === 0) {
                while (stack1.length > 0) {
                    let temp = stack1.pop();
                    stack2.push(temp);
                }
            }
            stack2.pop();
        }
        else if (operation[0] === '3') {
            if (stack2.length > 0) {
                console.log(stack2[stack2.length - 1]);
            }
            else {
                console.log(stack1[0]);
            }
        }
    }
}
