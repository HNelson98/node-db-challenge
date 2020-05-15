exports.seed = function (knex) {
  // Inserts seed entries
  return knex('projects').insert([
    {
      projectName: 'API Challenge',
      completed: true
    },
    {
      projectName: 'Javascript Challenge',
      completed: true
    },
    {
      projectName: 'SQL challenge',
      description: 'im working on it now'
    }
  ]);
}
