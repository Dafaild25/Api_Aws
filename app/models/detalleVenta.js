
const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Detalle extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'detalles_ventas';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['venta_id','producto_id'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                venta_id :{type: 'integer'},
                producto_id :{type: 'integer'},
                cantidad:{type: 'integer'},
                precio:{type:'number'}

            }
        };
    }

    static async getDetalleVenta(){ // metodo para listar clientes
        return await Detalle.query(); // select * from customer
    }

    static async insertarDetalleVenta(data){// metodo para insertar clientes
        return await Detalle.query()
            .insert(data); //insert into customer values ....
    }


}

module.exports = Detalle;



