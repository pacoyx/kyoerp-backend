const rolRepository = require("../repositories/rolRepository");

exports.getRol = async function (body) {
  const query = {};
  const respLog = await rolRepository.getRol(query);
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

exports.getByIdRol = async function ( params) {
  console.log('paramas==>',params);
  const query = 
  {
    idrol: params.idrol,
  };
  const respLog = await rolRepository.getByIdRol(query);
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


exports.registerRol = async function (body) {
  const query = {
   descripcion: body.descripcion,
   estado: body.estado,
  };
  const respLog = await rolRepository.registerRol(query);
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



exports.actualizarRol = async function (body) {
  const query = {
    idrol: body.idrol,
    descripcion: body.descripcion,
    estado: body.estado,
  };
  const respLog = await rolRepository.actualizarRol(query);
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


exports.eliminarRol = async function (body) {
  const query = {idrol: body.idrol};
  const respLog = await rolRepository.eliminarRol(query);
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