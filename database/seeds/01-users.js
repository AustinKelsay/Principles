const bcrypt = require("bcrypt");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'test1', password: bcrypt.hashSync('pass1', 14), admin: 1},
        {id: 2, username: 'test2', password: bcrypt.hashSync('pass2', 14)},
      ]);
    });
};
