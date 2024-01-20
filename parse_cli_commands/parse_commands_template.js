// Parse command line arguments
// Template of how to do this
// Import process which is like similar to the window object in a browser but process relates to the runtime in the nodejs environmetn 
const process = require('process');

// parce your args with process.argv.slice cli command would be node [filename] --option1 value1...etc
// const args = process.argv.slice(2);

// save placeholder default arguments in variables
let option1 = 'default1';
let option2 = 'default1';

// parse commands 
// use a for loop to loop through arguments 
for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    // use switch statemetns to decide what to do with values 
    switch (arg) {

        case '--option1':
        case '-o1':
            // Set option1 based on the next argument
            option1 = args[i + 1];
            i++; // Skip the next argument
            break;

        case '--option2':
        case '-o2':
            // Set option2 based on the next argument
            option2 = args[i + 1];
            i++; // Skip the next argument
            break;

        case '--help':
        case '-h':
                  // Display help message and exit
      console.log('Usage: node script.js [options]');
      console.log('Options:');
      console.log('--option1, -o1: Specify option 1');
      console.log('--option2, -o2: Specify option 2');
      console.log('--help, -h: Display this help message');
      process.exit(0); // Exit the script
      break;

//       // create default action should an argument not be valid 
      default:
        // Handle unknown or invalid arguments
        console.error('Invalid argument:', arg);
        process.exit(1); // Exit with an error code
        break;


    }
}
console.log('Option 1:', option1);
console.log('Option 2:', option2);

