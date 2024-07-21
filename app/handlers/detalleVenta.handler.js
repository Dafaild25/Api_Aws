const Detalle = require('../models/detalleVenta');
const Ventas = require('../models/Ventas')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listarDetallesVentas = async (req,res)=>{
    try{
        // llamado a funcion de select
        const detalleVenta = await Detalle.getDetalleVenta();
        res.json(detalleVenta); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const insertarDetalleVenta = async(req,res)=>{
    try{
        const detalleVenta =await Detalle.insertarDetalleVenta(req.body); 
        //201 para crear
        res.status(201).json(detalleVenta)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}



module.exports ={
    listarDetallesVentas,
    insertarDetalleVenta,

}