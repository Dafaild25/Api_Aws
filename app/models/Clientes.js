
const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Clientes extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'clientes';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['telefono','email'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                primer_nombre : {type:'string', minLength:1},
                segundo_nombre : {type:'string', minLength:1},
                primer_apellido : {type:'string', minLength:1},
                segundo_apellido : {type:'string', minLength:1},
                telefono:{type:'string'},
                email:{type:'string',format:'email'}

            }
        };
    }

    static async getClientes(){ // metodo para listar clientes
        return await Clientes.query(); // select * from customer
    }

    static async getClienteById(id) {
        return await Clientes.query().findById(id);
    }

    static async insertarCliente(data){// metodo para insertar clientes
        return await Clientes.query()
            .insert(data); //insert into customer values ....
    }


}

module.exports = Clientes;



