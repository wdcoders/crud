const express = require('express');
const app = express();

// Database Connection

app.get('/', (req, res)=>{
    res.send('working')
})

require('./routes/api')(app);

app.listen(3000, ()=>{
    console.log('Server connected');
})