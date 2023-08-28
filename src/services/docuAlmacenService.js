const docuAlmacenRepository = require("../repositories/docuAlmacenRepository");

exports.getDocuAlmacen = async function (body) {
  const query = {};
  const respLog = await docuAlmacenRepository.getDocuAlmacen(query);
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

exports.getByIdDocuAlmacen = async function ( params) {
  console.log('paramas==>',params);
  const query = 
  {
    codigo: params.codigo,
  };
  const respLog = await docuAlmacenRepository.getByIdDocuAlmacen(query);
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


exports.registerDocuAlmacen = async function (body) {
  const query = {
   codigo: body.codigo,
   descripcion: body.descripcion,
   estado:body.estado,
   codigo_sunat:body.codigo_sunat,
  };
  const respLog = await docuAlmacenRepository.registerDocuAlmacen(query);
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



exports.actualizarDocuAlmacen= async function (body) {
  const query = {
    codigo: body.codigo,
    descripcion: body.descripcion,
    estado:body.estado,
    codigo_sunat:body.codigo_sunat,
  };
  const respLog = await docuAlmacenRepository.actualizarDocuAlmacen(query);
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


exports.eliminarDocuAlmacen = async function (body) {
  const query = {codigo: body.codigo};
  const respLog = await docuAlmacenRepository.eliminarDocuAlmacen(query);
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