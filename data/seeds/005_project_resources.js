exports.seed = function (knex) {
  // Inserts seed entries
  return knex('project_resources').insert([
    {
      quantity: '2',
      project_id: 1,
      resource_id: 1
    },
    {
      quantity: '5',
      project_id: 3,
      resource_id: 2
    },
    {
      quantity: '1',
      project_id: 1,
      resource_id: 2
    },
    {
      quantity: '1',
      project_id: 1,
      resource_id: 2
    },
    {
      quantity: '1',
      project_id: 2,
      resource_id: 2
    },
    {
      quantity: '1',
      project_id: 3,
      resource_id: 2
    },
  ]);
}