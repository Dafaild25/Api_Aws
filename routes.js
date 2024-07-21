const express = require('express'); //llamando a framework

//llamar a handlers para api
const clienteHandler = require('./app/handlers/clientes.handler');
const vendedorHandler = require('./app/handlers/vendedor.handler');
const productoHandler = require('./app/handlers/productos.handler');
const ventaHandler = require('./app/handlers/ventas.handler');
const detalleHandler = require('./app/handlers/detalleVenta.handler');

//variable para encapsular rutas
const router = express.Router();

//registrar las rutas
//rutas de cliente
router.get('/clientes', clienteHandler.listarClientes) //obtener cliente
router.post('/clientes', clienteHandler.insertarCliente)// insertar cliente

router.get('/vendedores', vendedorHandler.listarVendedores) //obtener 
router.post('/vendedores', vendedorHandler.insertarVendedor)// insertar 

router.get('/productos', productoHandler.listarProductos) //obtener 
router.post('/productos', productoHandler.insertarProducto)// insertar 

router.get('/ventas', ventaHandler.listarVentas) //obtener 
router.post('/ventas', ventaHandler.insertarVenta)// insertar 

router.get('/detalleVenta', detalleHandler.listarDetallesVentas) //obtener 
router.post('/detalleVenta', detalleHandler.insertarDetalleVenta)// insertar



//otras rutas .....
module.exports=router;