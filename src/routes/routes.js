const logSistemaController = require('../controllers/logSistemaController');
const usuarioController = require('../controllers/usuarioController');
const rolController = require('../controllers/rolController');
const loginController = require('../controllers/loginController');
const almacenController = require('../controllers/almacenController');
const categoriaProdController = require('../controllers/categoriaProdController');
const docuAlmacenController = require('../controllers/docuAlmacenController');
const lotesController = require('../controllers/lotesController');
const productoController = require('../controllers/productoController');
const tipoTrxController = require('../controllers/tipoTrxController');
const uniMedidaController = require('../controllers/uniMedidaController');

const transaccionesCabController = require('../controllers/transaccionesCabController');
const stockController = require('../controllers/stockController');
const transaccionesDetController = require('../controllers/transaccionesDetController');
const transaccionAlmacenController =require('../controllers/transaccionAlmacenController');

//const logSistemaController = require("../controllers/logSistemaController");
const { login, refresh, register } = require("../handlers/handlers");
const { validarToken } = require("../middleware/middlewareAuth");

const stockProductoLoteController=require('../controllers/stockProductoLoteController');

module.exports = async function (app) {
    // app.post("/listarPartner", Prestamos.generalForwarding);

  // app.post("/listarPartner", Prestamos.generalForwarding);

  // app.use((req, res, next) => {
  //   console.log('Time:', Date.now())
  //   console.log('req.originalUrl::',req.originalUrl);

  //   if(req.originalUrl == '/register' || req.originalUrl == '/login'){
  //       next();
  //   }else{        
  //       validarToken(req, res, next);
  //   }
  // });

  //app.use(validarToken);

//   app.post("/getLogSistema", logSistemaController.getLogSistema);
//   app.post("/registerLogSistema", logSistemaController.registerLogSistema);

  app.post("/register", register);
  app.post("/login", login);
  app.post("/refresh", refresh);



    app.post('/getLogSistema',logSistemaController.getLogSistema);
    app.post('/registerLogSistema',logSistemaController.registerLogSistema);
    app.post('/actualizarLogSistema',logSistemaController.actualizarLogSistema);
    app.post('/eliminarLogSistema',logSistemaController.eliminarLogSistema);

    app.get('/getUsuario',usuarioController.getUsuario);
    app.get('/getByIdUsuario',usuarioController.getByIdUsuario);
    app.post('/registerUsuario',usuarioController.registerUsuario);
    app.put('/actualizarUsuario',usuarioController.actualizarUsuario);
    app.delete('/eliminarUsuario',usuarioController.eliminarUsuario);

    app.get('/getRol',rolController.getRol);
    app.get('/getByIdRol',rolController.getByIdRol);
    app.post('/registerRol',rolController.registerRol);
    app.put('/actualizarRol',rolController.actualizarRol);
    app.delete('/eliminarRol',rolController.eliminarRol);

    app.post('/getLogin',loginController.getLogin);

    app.get('/getAlmacen',almacenController.getAlmacen);
    app.get('/getByIdAlmacen',almacenController.getByIdAlmacen);
    app.post('/registerAlmacen',almacenController.registerAlmacen);
    app.put('/actualizarAlmacen',almacenController.actualizarAlmacen);
    app.delete('/eliminarAlmacen',almacenController.eliminarAlmacen);

    app.get('/getCategoriaProd',categoriaProdController.getCategoriaProd);
    app.get('/getByIdCategoriaProd',categoriaProdController.getByIdCategoriaProd);
    app.post('/registerCategoriaProd',categoriaProdController.registerCategoriaProd);
    app.put('/actualizarCategoriaProd',categoriaProdController.actualizarCategoriaProd);
    app.delete('/eliminarCategoriaProd',categoriaProdController.eliminarCategoriaProd);

    app.get('/getDocuAlmacen',docuAlmacenController.getDocuAlmacen);
    app.get('/getByIdDocuAlmacen',docuAlmacenController.getByIdDocuAlmacen);
    app.post('/registerDocuAlmacen',docuAlmacenController.registerDocuAlmacen);
    app.put('/actualizarDocuAlmacen',docuAlmacenController.actualizarDocuAlmacen);
    app.delete('/eliminarDocuAlmacen',docuAlmacenController.eliminarDocuAlmacen);
    
    app.get('/getLotes',lotesController.getLotes);
    app.get('/getByIdLotes',lotesController.getByIdLotes);
    app.post('/registerLotes',lotesController.registerLotes);
    app.put('/actualizarLotes',lotesController.actualizarLotes);
    app.delete('/eliminarLotes',lotesController.eliminarLotes);

    app.get('/getProducto',productoController.getProducto);
    app.get('/getByIdProducto',productoController.getByIdProducto);
    app.post('/registerProducto',productoController.registerProducto);
    app.put('/actualizarProducto',productoController.actualizarProducto);
    app.delete('/eliminarProducto',productoController.eliminarProducto);

    app.get('/getTipoTrx',tipoTrxController.getTipoTrx);
    app.get('/getByIdTipoTrx',tipoTrxController.getByIdTipoTrx);
    app.post('/registerTipoTrx',tipoTrxController.registerTipoTrx);
    app.put('/actualizarTipoTrx',tipoTrxController.actualizarTipoTrx);
    app.delete('/eliminarTipoTrx',tipoTrxController.eliminarTipoTrx);

    app.get('/getUniMedida',uniMedidaController.getUniMedida);
    app.get('/getByIdUniMedida',uniMedidaController.getByIdUniMedida);
    app.post('/registerUniMedida',uniMedidaController.registerUniMedida);
    app.put('/actualizarUniMedida',uniMedidaController.actualizarUniMedida);
    app.delete('/eliminarUniMedida',uniMedidaController.eliminarUniMedida);

    app.get('/getTransaccionesCab',transaccionesCabController.getTransaccionesCab);
    app.post('/registerTransaccionesCab',transaccionesCabController.registerTransaccionesCab);
    app.get('/getStock',stockController.getStock);
    app.post('/registerStock',stockController.registerStock);
    app.get('/getTransaccionesDet',transaccionesDetController.getTransaccionesDet);
    app.post('/registerTransaccionesDet',transaccionesDetController.registerTransaccionesDet);

    app.post('/registerTransaccionAlmacen',transaccionAlmacenController.registerTransaccionAlmacen);
  
    app.get('/getByStockProductoLote', stockProductoLoteController.getByStockProductoLote);
} 