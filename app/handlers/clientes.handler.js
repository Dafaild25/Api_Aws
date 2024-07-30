const Clientes = require('../models/Clientes')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listarClientes = async (req,res)=>{
    try{
        // llamado a funcion de select
        const cliente = await Clientes.getClientes();
        res.json(cliente); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}
const obtenerCliente = async (req, res) => {
    try {
        const cliente = await Clientes.getClienteById(req.params.id);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const insertarCliente = async(req,res)=>{
    try{
        const cliente =await Clientes.insertarCliente(req.body); 
        //201 para crear
        res.status(201).json(cliente)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}



module.exports ={
    listarClientes,
    insertarCliente,
    obtenerCliente ,

}