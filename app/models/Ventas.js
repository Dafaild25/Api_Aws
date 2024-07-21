
const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Ventas extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'ventas';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['fecha_venta'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'interger'},
                cliente_id :{type: 'interger'},
                vendedor_id :{type: 'interger'},
                fecha_venta:{type: 'timestamp'}

            }
        };
    }

    static async getVentas(){ // metodo para listar clientes
        return await Ventas.query(); // select * from customer
    }

    static async insertarVenta(data){// metodo para insertar clientes
        return await Ventas.query()
            .insert(data); //insert into customer values ....
    }


}

module.exports = Ventas;



