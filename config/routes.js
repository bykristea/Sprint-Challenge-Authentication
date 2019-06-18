const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../database/helpers/user.js');


const { authenticate, generateToken } = require('../auth/authenticate.js');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

/*
POST-> add user at route->
/api/register
creates id, username(string), password(string)
*/
function register(req, res) {
  // implement user registration
  const credentials = req.body;
  credentials.password = bcrypt.hashSync(credentials.password, 10);
  User.add(credentials)
    .then(user => {
      res.status(201).json({ message: 'You are now registered!' })
    })
    .catch(err => {
      res.status(500).json({ message: 'Failure to register new account' });
    })
}


function login(req, res) {
  /*
  implement user login POST ->
  Route -> api/login
  compares password entered with hashed password. 
  return welcome message with stored token
*/
  let { username, password } = req.body;

  User.findBy({username})
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message:  `Welcome ${user.username}`, token: token})
      } else {
        res.status(401).json({ message: "Invalid username or password"})
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

/*
  GET request -> route api/jokes
*/
function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
