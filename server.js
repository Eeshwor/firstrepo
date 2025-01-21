const express = require('express');
const app = express();
const PORT =process.env.PORT|| 8003;

app.use('/',(req,res)=>{
    res.send("Default root level");
})

app.use('/api',(req,res)=>{
    res.send("Default root level level");
})

app.listen(()=>{
    console.log(`Server running at `);
})