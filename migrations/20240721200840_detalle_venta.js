/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('detalles_ventas', table => {
        table.increments('id').primary();
        table.integer('venta_id').unsigned().notNullable();
        table.integer('producto_id').unsigned().notNullable();
        table.integer('cantidad').notNullable();
        table.decimal('precio', 10, 2).notNullable();
        table.timestamps(true, true);
    
        table.foreign('venta_id').references('id').inTable('ventas').onDelete('CASCADE');
        table.foreign('producto_id').references('id').inTable('productos').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('detalles_ventas');
};
