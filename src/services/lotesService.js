const lotesRepository = require("../repositories/lotesRepository");

exports.getLotes = async function (body) {
  const query = {};
  const respLog = await lotesRepository.getLotes(query);
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

exports.getByIdLotes = async function ( params) {
  console.log('paramas==>',params);
  const query = 
  {
    codigo: params.codigo,
  };
  const respLog = await lotesRepository.getByIdLotes(query);
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


exports.registerLotes = async function (body) {
  const query = {
   codigo: body.codigo,
   descripcion:body.descripcion,
   fecha_vto:body.fecha_vto,
   estado: body.estado,
  };
  const respLog = await lotesRepository.registerLotes(query);
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



exports.actualizarLotes = async function (body) {
  const query = {
    codigo: body.codigo,
    descripcion:body.descripcion,
    fecha_vto:body.fecha_vto,
    estado: body.estado,
  };
  const respLog = await lotesRepository.actualizarLotes(query);
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


exports.eliminarLotes = async function (body) {
  const query = {codigo: body.codigo};
  const respLog = await lotesRepository.eliminarLotes(query);
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