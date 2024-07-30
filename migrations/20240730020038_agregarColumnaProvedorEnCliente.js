/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('productos', function(table) {
        table.string('proveedor').nullable(); // Agregar nueva columna
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('productos', function(table) {
        table.dropColumn('proveedor'); // Eliminar columna en caso de rollback
    });
};
