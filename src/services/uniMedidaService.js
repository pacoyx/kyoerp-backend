const uniMedidaRepository = require("../repositories/uniMedidaRepository");

exports.getUniMedida = async function (body) {
  const query = {};
  const respLog = await uniMedidaRepository.getUniMedida(query);
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

exports.getByIdUniMedida = async function ( params) {
  console.log('paramas==>',params);
  const query = 
  {
    codigo: params.codigo,
  };
  const respLog = await uniMedidaRepository.getByIdUniMedida(query);
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


exports.registerUniMedida = async function (body) {
  const query = {
   codigo:body.codigo,
   descripcion: body.descripcion,
   estado: body.estado,
  };
  const respLog = await uniMedidaRepository.registerUniMedida(query);
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



exports.actualizarUniMedida = async function (body) {
  const query = {
    codigo:body.codigo,
    descripcion: body.descripcion,
    estado: body.estado,
  };
  const respLog = await uniMedidaRepository.actualizarUniMedida(query);
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


exports.eliminarUniMedida= async function (body) {
  const query = {codigo: body.codigo};
  const respLog = await uniMedidaRepository.eliminarUniMedida(query);
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