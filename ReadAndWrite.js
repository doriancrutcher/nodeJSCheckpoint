const { readFileSync, writeFileSync } = require('fs')
const path = require('path')
const asyncFS = require('fs').promises

const fs = require('fs').promises

// Read and write files
// Synchronus Read
const syncRead = readFileSync('./content/readcheck.txt', 'utf-8')
console.log('This is the sync read Result:', syncRead);

// Sync Write
const dataToWrite = "This is data I'm writing"
const syncWrite = writeFileSync('./content/writesynccheck.txt', dataToWrite);

// Async Read 
const dirPath = './content/';
const filename = 'readcheck.txt'
const asyncFile = 'asyncFileName.txt'

const asyncRead = async () => {
    try {
        const result = await asyncFS.readFile(path.join(dirPath, filename), 'utf-8')
        console.log('The async Result is', result)
    } catch (error) {
        console.error('Error:', error)
    }

}
// asyncRead()


const asyncWrite = async () => {
    try {
        asyncFS.writeFile(path.join(dirPath, asyncFile), dataToWrite)
    } catch (error) {
        console.error('Error:', error)
    }
}

// asyncWrite()
