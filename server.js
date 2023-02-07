// This is going to be the backend server file

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const Event = require('./model/Event');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
      if (!result) {
        res.status(400).json({ message: 'No events found. Create an event.'})
      }
      res.status(200).json(result);
    })
    .catch(err => console.log(err));
})

app.post('/create-event', (req, res) => {
  console.log(req.body);

  // Save event to DB
  const event = new Event(req.body);
  event.save()
    .then(result => {
      console.log(result);
      res.status(200).json('Successfully created event.');
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
})

app.delete('/:id', (req, res) => {
  // Deletes event based on event ID
  const id = req.params.id;
  Event.findByIdAndDelete(id)
    .then(result => {
      console.log(result);
      res.status(200).json('Successfully deleted event.');
    })
    .catch(err => {
      res.status(400).json(err.message);
    })
});

app.put('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  Event.findByIdAndUpdate(id, req.body, { runValidators: true, })
    .then(result => {
      console.log(result);
      res.status(200).json('Successfully updated event.');
    })
    .catch(err => {
      res.status(400).json(err.message);
    })
});



// endpoints

// read
// create
// delete
// edit
