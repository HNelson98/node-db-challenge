exports.seed = function (knex) {
  // Inserts seed entries
  return knex('resources').insert([
    {
      resourceName: 'computer',
      description: 'its pretty important to do the code'
    },
    {
      resourceName: 'a brain'
    },
    {
      resourceName: 'Internet',
      description: 'important to show off the code'
    }
  ]);
}

