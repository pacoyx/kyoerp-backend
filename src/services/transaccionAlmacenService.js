
const transaccionesCabRepository = require("../repositories/transaccionesCabRepository");
const transaccionesDetRepository = require("../repositories/transaccionesDetRepository");

exports.registerTransaccionAlmacen= async function (body) { 

    let arrRespuesta=[]
    //grabar en cabecera
    const query = {
        tipo_trx: body.cabecera.tipo_trx,
        cod_almacen: body.cabecera.cod_almacen,
        cod_doc_ref:body.cabecera.cod_doc_ref,
        ser_doc_ref:body.cabecera.ser_doc_ref,
        num_doc_ref:body.cabecera.num_doc_ref,
        estado:body.cabecera.estado,
        usuario:body.cabecera.usuario,
        observaciones:body.cabecera.observaciones,
        obs_estado:body.cabecera.obs_estado,
      };
      const respLog = await transaccionesCabRepository.registerTransaccionesCab(query);
      arrRespuesta.push(respLog)
      const idcab = respLog.data[0].idcab


    //grabar detalle

    body.detalle.forEach( async element  => {
        const query = {
          idcab: idcab,
          idproducto:element.idproducto,
          cantidad:element.cantidad,
          uni_med:element.uni_med,
          estado:element.estado,
          observaciones:element.observaciones,
          numlote:element.numlote,
          cod_almacen: body.cabecera.cod_almacen,
          tipo_trx: body.cabecera.tipo_trx,
        };
        
        const respLog = await transaccionesDetRepository.registerTransaccionesDet(query);
        arrRespuesta.push(respLog)
      

        
        });
      


    //enviar respuesta

      arrRespuesta.forEach(item => {
         
      if (!item.estado) {
        const resp = {
          codigoRespuesta: "99",
          error: item.error,
        };
        return resp;
      }
      });
     
    
      const respOk = {
        codigoRespuesta: "00",
        data: 'transaccion almacen correcto', 
        idtransaccion: idcab ,
      };
    
      return respOk;
    };