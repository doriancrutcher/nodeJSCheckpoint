// Calculator CLI:
// Create a command-line calculator that takes two numbers and an operator as command line 
// arguments and performs basic arithmetic operations like addition, subtraction, multiplication, 
// and division.

const calcArgs = process.argv.slice(2)
console.log('calcArs Are:', calcArgs);
let output = 0

const arg = calcArgs[0]
console.log('the value is ', arg)

switch (arg) {
    case '--addition':
        console.log('this will allow you to find the sum of a series of numbers')
        for (let j = 1; j < calcArgs.length; j++) {
            output = output + Number(calcArgs[j])
        }
        console.log('output is:', output)
        break;
    case '--subtraction':
        console.log('this will give you the difference between two values')
        output = Number(calcArgs[1]) - Number(calcArgs[2])
        console.log('output is:', output)
        break;
    case '--divistion':
        console.log('this will allow you to divide one arg 1 by arg 2')
        output = Number(calcArgs[1]) / Number(calcArgs[2])
        console.log('output is:', output)
        break;
    case '--multiplication':
        console.log('this will allow you to divide one arg 1 by arg 2')
        output = Number(calcArgs[1]) * Number(calcArgs[2])
        console.log('output is:', output)
        break;

    default:
        // Handle unknown or invalid arguments
        console.error('Invalid argument:', arg);
        process.exit(1); // Exit with an error code
        break;

}