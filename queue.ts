

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // This implementation of a 2-stack queue is likely the costliest, but simplest to implement. 
    // In adherence to the stack and queue principles. Any enqueued element will incur a costly 
    // process where the entire contents of the 1st stack is popped off into the temporary stack2
    // whatever new element is added to stack1, thereafter stack2 pops all of it's members back off
    // to stack1, thus ensuring the first element into this main function will be the first out

    const stack1: any = [];
    const stack2: any = [];
    const querySize = parseInt(readLine());
    for (let i = 0; i < querySize; i++) {
        let input = readLine();
        let prefix = input[0];
        // Remember for-each is going to be a left-to-right operation.. You'll have to use a while loop to 
        // transfer stack1 to the temp stack2 by popping each element
        switch (prefix) {
            case '1':
                while (stack1.length != 0) {
                    stack2.push(stack1.pop())
                }
                stack1.push(input.slice(1, input.length));
                while (stack2.length != 0) {
                    stack1.push(stack2.pop())
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