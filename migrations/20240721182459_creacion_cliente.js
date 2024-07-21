/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('clientes', table => {
        table.increments('id').primary();
        table.string('primer_nombre').notNullable();
        table.string('segundo_nombre');
        table.string('primer_apellido').notNullable();
        table.string('segundo_apellido');
        table.string('email').notNullable().unique();
        table.string('telefono').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('clientes');
};
