const Vendedores = require('../models/Vendedores')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listarVendedores = async (req,res)=>{
    try{
        // llamado a funcion de select
        const vendedor = await Vendedores.getVendedores();
        res.json(vendedor); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const insertarVendedor = async(req,res)=>{
    try{
        const vendedor =await Vendedores.insertarVendedore(req.body); 
        //201 para crear
        res.status(201).json(vendedor)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}



module.exports ={
    listarVendedores,
    insertarVendedor,

}