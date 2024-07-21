/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('productos', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.text('descripcion');
        table.decimal('precio', 10, 2).notNullable();
        table.integer('stock').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('productos');
};
