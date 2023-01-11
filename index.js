const axios = require('axios');
const express = require('express')
const app = express()
const hostname = 'fyle.cyclic.app';
const port = 3000;


axios.get('https://api.github.com/users/Akash2212')
.then((r)=>{
    console.log(r.data.name)
    app.get('/',(req,res)=>{
        res.send("Express server")
    })
    app.get('/name',(req,res)=>{
        res.send(r.data.name);
    })
    app.listen(hostname,()=>{
    console.log("Server is running")
})
})
.catch((err)=>console.log(err))

