
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'test1', password: 'pass1'},
        {id: 2, username: 'test2', password: 'pass2'},
      ]);
    });
};
