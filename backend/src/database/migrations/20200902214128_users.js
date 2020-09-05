// const knex = require('knex');


exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('conta').primary();
        table.string('nome').notNullable();
        table.string("senha").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
