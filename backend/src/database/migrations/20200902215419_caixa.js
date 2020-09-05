
exports.up = function(knex) {
    return knex.schema.createTable('caixaeletronico', table => {
      table.increments('id').primary();
      table.integer('nota').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("caixaeletronico");
};
