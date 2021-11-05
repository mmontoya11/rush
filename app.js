const express = require('express');
const app = express();
const port =   3000;

app.listen(port, () =>{
    console.log(" app liseting in port "+ port)
});

app.get('/', (req, res)=>{
    res.send('api works');
})