const stockProductoLoteRepository = require("../repositories/stockProductoLoteRepository");

exports.getByStockProductoLote = async function ( params) {
    console.log('paramas==>',params);
    const query = 
    {
        resumido: params.resumido,
    };
    const respLog = await stockProductoLoteRepository.getByStockProductoLote(query);
    if (!respLog.estado) {
      const resp = {
        codigoRespuesta: "99",
        error: respLog.error,
      };
      return resp;
    }
  
    const respOk = {
      codigoRespuesta: "00",
      data: respLog.data,
    };
  
    return respOk;
  };