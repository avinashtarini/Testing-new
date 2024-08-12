const express = require('express')

const app = express()

app.listen(3000)
console.log('JJJJ')

app.get('/good',async(req,res)=>{
    console.log(req)
    res.send('be good')
})