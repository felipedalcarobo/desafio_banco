
exports.up = function(knex) {
    return knex.schema.createTable('caixaeletronico', table => {
      table.increments('id').primary();
      table.integer('nota').notNullable();
      table.unique(['nota']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("caixaeletronico");
};
