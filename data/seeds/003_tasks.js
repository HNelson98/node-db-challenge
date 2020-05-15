exports.seed = function (knex) {
  // Inserts seed entries
  return knex('tasks').insert([
    {
      description: 'do the api code',
      project_id: 1
    },
    {
      description: 'do the JS code',
      project_id: 2
    },
    {
      description: 'do the sql code',
      completed: true,
      project_id: 3
    },
  ]);
}
