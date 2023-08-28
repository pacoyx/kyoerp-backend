const transaccionesDetRepository = require("../repositories/transaccionesDetRepository");

exports.getTransaccionesDet = async function (body) {
  const query = {};
  const respLog = await transaccionesDetRepository.getTransaccionesDet(query);
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

exports.registerTransaccionesDet = async function (body) { 
  
  const query = {
    idcab: body.idcab,
    idproducto: body.idproducto,
    cantidad:body.cantidad,
    uni_med:body.uni_med,
    estado:body.estado,
    observaciones:body.observaciones,
    numlote:body.numlote,
  };
  const respLog = await transaccionesDetRepository.registerTransaccionesDet(query);
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