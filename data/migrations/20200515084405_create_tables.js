
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl =>{
      tbl.increments();

      tbl.string('projectName')
      .unique()
      .notNullable();

      tbl.string('description', 255);

      tbl.boolean('completed').default(false);
  })
  .createTable('tasks', tbl =>{
      tbl.increments();

      tbl.string('description', 255).notNullable();

      tbl.string('notes', 175);

      tbl.boolean('completed').default(false);

      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('projects.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

  })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project')
};
