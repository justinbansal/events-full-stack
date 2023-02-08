const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your last name'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Please enter a username'],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  token: {
    type: String,
  },
  events: []
});

userSchema.pre('save', function(next) {
  bcrypt.genSalt()
    .then(salt => {
      bcrypt.hash(this.password, salt)
        .then(result => {
          this.password = result;
          next();
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
})

const User = mongoose.model('User', userSchema);

module.exports = User;
