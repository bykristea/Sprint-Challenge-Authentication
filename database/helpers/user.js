const db = require('../dbConfig.js');


// helper function that inserts user upon registration
module.exports = {
    add: (user) => {
        return db('users').insert(user);
    },

    logIn: (username) => {
        return db('users').where({ username }).first();
    }

};