
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('principles').del()
    .then(function () {
      // Inserts seed entries
      return knex('principles').insert([
        {
          id: 1, 
          user_id: 2,
          problem: 'I am consuming too much sugar', 
          diagnosis: 'Sugar consumption is a habit I have developed to cope and reduce stress',
          change: 'Replace this unhealthy habit with one that makes me feel better and live better and mark my habit tracker each time I preform it instead of going to something sugary first'
        },
        {
          id: 2, 
          user_id: 2,
          problem: 'I am too unfocussed during the work day and I am not getting enough done', 
          diagnosis: 'I am not being clear about what needs to be done and when I will do it so I am getting overwhelemed which causes procrastination/lack of focus',
          change: 'I am going to write a simple list of tasks with times and this list will be my only requirments for the day, nothing else! I will mark them off as a success or failure everyday.'
        },
      ]);
    });
};
