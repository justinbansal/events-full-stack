// This is going to be the backend server file

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello Justin!');

  // get events from DB
})

app.post('/create-event', (req, res) => {
  console.log(req.body);
  res.send(req.body);

  // save events to DB
  // can't redirect the front end
  // pass redirect url back to request
})

app.listen(port, () => {
  console.log(`My fullstack app has started listening on port ${port}`);
})

// endpoints

// read
// create
// delete
// edit
