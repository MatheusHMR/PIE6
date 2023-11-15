const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

mongoose.connect('mongodb://localhost/4000', )

app.get('/', (req, res) =>{
    res.send('Hello, Matheusao!');
})

// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });

app.get('/get-sensor', (req,res) =>{
    res.send('GET request received');
});

app.post('/update-sensor', (req, res) =>{

    res.send('POST request received');
})

app.listen(4000, () =>{
    console.log('Server started on port 4000');
});


