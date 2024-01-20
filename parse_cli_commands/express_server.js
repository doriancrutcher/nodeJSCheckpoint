const express=require('express');
const app=express();


app.get('/api/sayhi',(req,res)=>{
    res.status(200).send('say hi')
})


app.listen(3000,()=>{
    console.log('listening on port 3000...')
})

