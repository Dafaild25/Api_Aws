const Ventas = require('../models/Ventas')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listarVentas = async (req,res)=>{
    try{
        // llamado a funcion de select
        const venta = await Ventas.getVentas();
        res.json(venta); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const insertarVenta = async(req,res)=>{
    try{
        const venta =await Ventas.insertarVenta(req.body); 
        //201 para crear
        res.status(201).json(venta)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}



module.exports ={
    listarVentas,
    insertarVenta,

}