const express = require('express');
const app = express();
const PORT =process.env.PORT|| 8003;

app.use('/',(req,res)=>{
    res.send("Default root level");
})

app.use('/apis',(req,res)=>{
    res.send("Default root level level");
})

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})