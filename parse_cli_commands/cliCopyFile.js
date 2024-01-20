// File Manipulation Tool:
// Build a CLI tool that allows users to perform file operations like copying a file.
const process = require('process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args[0] === 'help') {
    console.log('Usage:');
    console.log('To copy a file: node script.js copy <sourceRelativePath> <sourceFileName> <destinationRelativePath> <newFileName>');
    process.exit(0);
} else if (args[0] === 'copy') {
    const relativeLocation = args[1];
    const filename = args[2];
    const destinationLocation = args[3];
    const newFileName = args[4];

    const sourceFilePath = path.resolve(__dirname, relativeLocation, filename);
    const destinationFilePath = path.resolve(__dirname, destinationLocation, newFileName);

    // Check if the source file exists
    if (!fs.existsSync(sourceFilePath)) {
        console.error('Source file does not exist:', sourceFilePath);
        process.exit(1); // Exit with an error code
    }

    // Check if the destination directory exists
    if (!fs.existsSync(path.dirname(destinationFilePath))) {
        console.error('Destination directory does not exist:', path.dirname(destinationFilePath));
        process.exit(1); // Exit with an error code
    }

    fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
        if (err) {
            console.error('Error copying file:', err);
            process.exit(1); // Exit with an error code
        } else {
            console.log('File copied successfully!');
        }
    });
} else {
    console.error('Invalid command. Use "help" for usage instructions.');
    process.exit(1); // Exit with an error code
}
