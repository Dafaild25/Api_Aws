/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('detalles_ventas', function(table) {
        table.text('descripcion').nullable(); // Agregar columna descripcion que permite valores nulos
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('detalles_ventas', function(table) {
        table.dropColumn('descripcion'); // Eliminar columna descripcion en caso de rollback
    });
};
