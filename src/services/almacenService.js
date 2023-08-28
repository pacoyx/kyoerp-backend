const almacenRepository = require("../repositories/almacenRepository");

exports.getAlmacen = async function (body) {
  const query = {};
  const respLog = await almacenRepository.getAlmacen(query);
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

exports.getByIdAlmacen = async function ( params) {
  console.log('paramas==>',params);
  const query = 
  {
    codigo: params.codigo,
  };
  const respLog = await almacenRepository.getByIdAlmacen(query);
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


exports.registerAlmacen = async function (body) {
  const query = {
   codigo: body.codigo,
   descripcion: body.descripcion,
   direccion:body.direccion,
   estado:body.estado,
  };
  const respLog = await almacenRepository.registerAlmacen(query);
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



exports.actualizarAlmacen= async function (body) {
  const query = {
    codigo: body.codigo,
    descripcion: body.descripcion,
    direccion: body.direccion,
    estado: body.estado,
  };
  const respLog = await almacenRepository.actualizarAlmacen(query);
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


exports.eliminarAlmacen = async function (body) {
  const query = {codigo: body.codigo};
  const respLog = await almacenRepository.eliminarAlmacen(query);
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