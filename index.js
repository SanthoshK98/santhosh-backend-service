const express = require('express')
const app = express()


app.get('/get',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})


app.listen( 3000,()=>{
    console.log(`Listening on Port 5000`)
})