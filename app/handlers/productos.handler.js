const Productos = require('../models/Productos')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listarProductos = async (req,res)=>{
    try{
        // llamado a funcion de select
        const producto = await Productos.getProductos();
        res.json(producto); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const insertarProducto= async(req,res)=>{
    try{
        const producto =await Productos.insertarProducto(req.body); 
        //201 para crear
        res.status(201).json(producto)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}



module.exports ={
    listarProductos,
    insertarProducto,

}