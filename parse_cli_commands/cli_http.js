
// Make HTTP requests
// Parse JSON
// Use a third-party library (e.g. a library for parsing CSV files)
// Use a third-party API

const process=require('process');
const http=require('http');

const options = { 
    hostname:'localhost',
    port:3000,
    path:'/api/sayhi',
    method:'get'
};

const req = http.request(options, (res) => {
    let data = '';
  
    res.on('data', (chunk) => {
      data += chunk;
    });
  
    res.on('end', () => {
      console.log(data);
    });
  });
  
  req.on('error', (error) => {
    console.error(error);
  });
  
  req.end();