const knex = require('knex');
const dbConfig = require('../../knexfile.js');

const db = knex(dbConfig.development);


// helper function that inserts user upon registration
module.exports = {
    add: (user) => {
        return db('users').insert(user);
    },

    logIn: (username) => {
        return db('users').where({ username }).first();
    }

};