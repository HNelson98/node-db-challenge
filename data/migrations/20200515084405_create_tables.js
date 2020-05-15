
exports.up = function(knex) {
  return knex.schema
  .createTable('project', tbl =>{
      tbl.increments();

      tbl.string('projectName')
      .unique()
      .notNullable();

      tbl.string('description', 255)

      tbl.boolean('completed').default(false)
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project')
};
