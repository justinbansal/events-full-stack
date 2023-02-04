// This is going to be the backend server file

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const Event = require('./model/Event');

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const dbURI = 'mongodb+srv://events:test12345@fullstack.icomaol.mongodb.net/?retryWrites=true&w=majority';

// Connection to MongoDB
mongoose.connect(dbURI)
  .then(result => app.listen(port, () => {
    console.log(`My fullstack app has started listening on port ${port}`);
  }))
  .catch(err => console.log(err));

// Read events from DB
app.get('/', (req, res) => {
  Event.find()
    .then(result => {
      console.log(result);
      // If result is empty, no events found. Create an event.
      res.status(200).json({ message: 'No events found. Create an event.'})
    })
    .catch(err => console.log(err));
  // model
  // schema
  // looks in DB
  // need to send data to front end?
  // returns error
})

app.post('/create-event', (req, res) => {
  console.log(req.body);
  res.send(req.body);

  // save events to DB
  // can't redirect the front end
  // pass redirect url back to request
})



// endpoints

// read
// create
// delete
// edit
