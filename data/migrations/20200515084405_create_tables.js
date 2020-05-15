
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();

            tbl.string('projectName')
                .unique()
                .notNullable();

            tbl.string('description', 255);

            tbl.boolean('completed').default(false);
        })

        .createTable('tasks', tbl => {
            tbl.increments();

            tbl.string('description', 255).notNullable();

            tbl.string('notes', 175);

            tbl.boolean('completed').default(false);

            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })

        .createTable('resources', tbl => {
            tbl.increments()

            tbl.string('resourceName', 155).notNullable();

            tbl.string('description', 255);
        })

        .createTable('project_resources', project_resourcea => {
            project_resourcea.increments();

            project_resourcea.string('quantity');

            project_resourcea.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project.id')

            project_resourcea.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource.id')

        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
