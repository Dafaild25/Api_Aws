/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ventas', table => {
        table.increments('id').primary();
        table.integer('cliente_id').unsigned().notNullable();
        table.integer('vendedor_id').unsigned().notNullable();
        table.timestamp('fecha_venta').defaultTo(knex.fn.now());
        table.timestamps(true, true);
    
        table.foreign('cliente_id').references('id').inTable('clientes').onDelete('CASCADE');
        table.foreign('vendedor_id').references('id').inTable('vendedores').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ventas');
};
