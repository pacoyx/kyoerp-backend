const transaccionesCabRepository = require("../repositories/transaccionesCabRepository");

exports.getTransaccionesCab = async function (body) {
  const query = {};
  const respLog = await transaccionesCabRepository.getTransaccionesCab(query);
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

exports.registerTransaccionesCab = async function (body) {
  const query = {
    tipo_trx: body.tipo_trx,
    cod_almacen: body.cod_almacen,
    cod_doc_ref:body.cod_doc_ref,
    ser_doc_ref:body.ser_doc_ref,
    num_doc_ref:body.num_doc_ref,
    estado:body.estado,
    usuario:body.usuario,
    observaciones:body.observaciones,
    obs_estado:body.obs_estado,
  };
  const respLog = await transaccionesCabRepository.registerTransaccionesCab(query);
  if (!respLog.estado) {
    const resp = {
      codigoRespuesta: "99",
      error: respLog.error,
    };
    return resp;
  }

  const respOk = {
    codigoRespuesta: "00",
    data: respLog.data[0].idcab,
  };

  return respOk;
};