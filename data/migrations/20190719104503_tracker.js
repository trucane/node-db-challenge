
exports.up = function(knex) {
  return knex.schema
  .createTable( 'projects' , tbl =>{

      tbl.increments();

      tbl.string('name' , 128)
      .unique()
      .notNullable();

      tbl.string('description', 250)
      .notNullable()

      tbl.boolean('completed')
      .notNullable();
  })
  .createTable('actions', tbl =>{
      tbl.increments();

      tbl.decimal('project_id')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');


      tbl.string('description')
      .unique()
      .notNullable();

      tbl.string('notes');

      tbl.boolean('completed')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('actions')
};
