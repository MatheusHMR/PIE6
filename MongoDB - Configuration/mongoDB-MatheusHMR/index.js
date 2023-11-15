const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const uri = "mongodb+srv://MatheusHMR:UgTZRaETuTHGCo2Y@clusterteste.x27fupa.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;
const dataSchema = new Schema({
  name: String,
  value: Number
});

const Data = mongoose.model('Data', dataSchema);

app.post('/data', (req, res) => {
    const newData = new Data({
      name: req.body.name,
      value: req.body.value
    });

    newData.save()
    .then(item => res.json(item))
    .catch(err => {
      console.log(err);
      res.status(500).send("Server error");
    });
  });

  const port = 4000; // Replace with your port number
  app.listen(port, () => console.log(`Server started on port ${port}`));
