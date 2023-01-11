const http = require('http');
const axios = require('axios');
const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.get('/hello',(req,res)=> {
    res.send("Hello world");
})

app.post('/data',(req,res)=>{
    res.send('post data')
    console.log(req.data)
    console.log(res.data)
})

app.listen(port,hostname,()=>{
    console.log("Server is running")
})