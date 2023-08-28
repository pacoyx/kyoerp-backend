const logSistemaRepository = require("../repositories/logSistemaRepository");

exports.getLogSistema = async function (body) {
  const query = {};
  const respLog = await logSistemaRepository.getLogSistema(query);
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

exports.registerLogSistema = async function (body) {
  const query = {
    modulo: body.modulo,
    tipo: body.tipo,
    usuario: body.usuario,
    mensaje: body.mensaje,
  };
  const respLog = await logSistemaRepository.registerLogSistema(query);
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



exports.actualizarLogSistema = async function (body) {
  const query = {
    id: body.id,
    modulo: body.modu,
    tipo: body.tip,
    usuario: body.usu,
    mensaje: body.men,
  };
  const respLog = await logSistemaRepository.actualizarLogSistema(query);
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


exports.eliminarLogSistema = async function (body) {
  const query = {id: body.id};
  const respLog = await logSistemaRepository.eliminarLogSistema(query);
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