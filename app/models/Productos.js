
const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Productos extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'productos';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['nombre','precio'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                nombre : {type:'string', minLength:1},
                descripcion: {type:'string', minLength:1},
                precio:{type:'number'},
                stock : {type:'integer'},
                

            }
        };
    }

    static async getProductos(){ // metodo para listar clientes
        return await Productos.query(); // select * from customer
    }

    static async insertarProducto(data){// metodo para insertar clientes
        return await Productos.query()
            .insert(data); //insert into customer values ....
    }


}

module.exports = Productos;



