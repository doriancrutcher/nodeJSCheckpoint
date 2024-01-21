
// // This files is just me messing around with the different ways to read and write files in node.js using streams 

// // const buffer=new Buffer.from('Hello World','utf8');
// // const fs=require('fs');

// // buffer.write('egg pie','utf8');
// // console.log(buffer.toJSON());


// // // let's create a readable stream with a pipe 
// // const readableStream = fs.createReadStream('./content/createCyberStream.txt',{
// //     encoding:'utf8',
// //     highWaterMark:2
// // });

// // readableStream.pipe(fs.WriteStream('./content/outputStream.txt'));

// // // let's create a writable stream with a pipe
// // const writableStream = fs.createWriteStream('./content/outputStream.txt');


// const fs=require('fs');

// // I am defining the path to the file I want to read
// const filePath='./content/createCyberStream.txt';

// // Next I am creating a readable stream
// // Which will allow me to read the file in chunks
// // chunks are just small pieces of the file
// // I am also setting the encoding to utf8
// // encoding to utf8 will allow me to read the file as a string from the buffer of the file which is a binary file
// // the buffer is commonly presentent in the form of a hexidecimal number
// // and the highWaterMark to 2
// // which means that the stream will read 2 bytes at a time
// // the reason it is 2 bytes is because utf8 is a multibyte character encoding
// // if I wanted it to be larger I'd have to set the highWaterMark to a larger number which would allow me to read more bytes at a time
// // before it emits a data event
// // the cost of setting a larger highWaterMark is that it will take longer to read the file
// // one character in utf8 is 1 byte which is 8 bits
// // one highwatermark is 2 bytes which is 16 bits
// // so if I set the highWaterMark to 8
// // then the stream will read 16 bytes at a time
// const readableStream = fs.createReadStream(filePath,{
//     encoding:'utf8',
//     highWaterMark:1
// });

// // after creating a readable stream I can create a pipe by calling the pipe method on the readable stream
// // a pipe allows me to read the file in chunks and then write the chunks to a file instead of reading the entire file at once

// const newPipe= readableStream.pipe(fs.WriteStream('./content/outputStream.txt'));

// const writableStream = fs.createWriteStream('./content/outputStream.txt');

// // after creating the pipe I can listen for the data event on the readable stream
// // the data event will fire when the stream reads the file in chunks
// // then I can console.log the data that is read from the file

// //to listen for the data event I can call the on method on the readable stream


// readableStream.on('data',(chunk)=>{
//     console.log(chunk.toString());
// })

// readableStream.on('end',()=>{
//     console.log('finished reading file');
    
// })  


// Final understanding of the flow for today

const fs = require('fs');

const readableStream = fs.createReadStream('./content/createCyberStream.txt', {
encoding: 'utf8',
highWaterMark: 2
});

const writableStream = fs.createWriteStream('./content/outputFinalStream.txt');


readableStream.pipe(writableStream);









