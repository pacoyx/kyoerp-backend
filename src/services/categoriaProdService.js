const categoriaProdRepository = require("../repositories/categoriaProdRepository");

exports.getCategoriaProd = async function (body) {
  const query = {};
  const respLog = await categoriaProdRepository.getCategoriaProd(query);
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

exports.getByIdCategoriaProd = async function ( params) {
  console.log('paramas==>',params);
  const query = 
  {
    codigo: params.codigo,
  };
  const respLog = await categoriaProdRepository.getByIdCategoriaProd(query);
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


exports.registerCategoriaProd = async function (body) {
  const query = {
    codigo:body.codigo,
    descripcion: body.descripcion,
  };
  const respLog = await categoriaProdRepository.registerCategoriaProd(query);
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



exports.actualizarCategoriaProd = async function (body) {
  const query = {
    codigo:body.codigo,
    descripcion: body.descripcion,
  };
  const respLog = await categoriaProdRepository.actualizarCategoriaProd(query);
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


exports.eliminarCategoriaProd = async function (body) {
  const query = {codigo: body.codigo};
  const respLog = await categoriaProdRepository.eliminarCategoriaProd(query);
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