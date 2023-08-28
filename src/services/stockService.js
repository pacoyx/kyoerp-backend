const stockRepository = require("../repositories/stockRepository");

exports.getStock = async function (body) {
  const query = {};
  const respLog = await stockRepository.getStock(query);
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


exports.registerStock = async function (body) {
  const query = {
    cod_almacen: body.cod_almacen,
    idprod: body.idprod,
    lote:body.lote,
    stock:body.stock,
  };
  const respLog = await stockRepository.registerStock(query);
  if (!respLog.estado) {
    const resp = {
      codigoRespuesta: "99",
      error: respLog.error,
    };
    return resp;
  }

  const respOk = {
    codigoRespuesta: "00",
    data: 'log registrado',
  };

  return respOk;
};
