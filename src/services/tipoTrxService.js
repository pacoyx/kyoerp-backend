const tipoTrxRepository = require("../repositories/tipoTrxRepository");

exports.getTipoTrx = async function (body) {
  const query = {};
  const respLog = await tipoTrxRepository.getTipoTrx(query);
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

exports.getByIdTipoTrx = async function ( params) {
  console.log('paramas==>',params);
  const query = 
  {
    codigo: params.codigo,
  };
  const respLog = await tipoTrxRepository.getByIdTipoTrx(query);
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


exports.registerTipoTrx = async function (body) {
  const query = {
   codigo:body.codigo,
   descripcion:body.descripcion,
   tipo_movi:body.tipo_movi,
  };
  const respLog = await tipoTrxRepository.registerTipoTrx(query);
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



exports.actualizarTipoTrx = async function (body) {
  const query = {
    codigo:body.codigo,
    descripcion:body.descripcion,
    tipo_movi:body.tipo_movi,
  };
  const respLog = await tipoTrxRepository.actualizarTipoTrx(query);
  if (!respLog.estado) {
    const resp = {
      codigoRespuesta: "99",
      error: respLog.error,
    };
    return resp;
  }

  const respOk = {
    codigoRespuesta: "00",
    data: 'log actualizado',
  };

  return respOk;
};


exports.eliminarTipoTrx= async function (body) {
  const query = {codigo: body.codigo};
  const respLog = await tipoTrxRepository.eliminarTipoTrx(query);
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