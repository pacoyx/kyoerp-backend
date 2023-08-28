const productoRepository = require("../repositories/productoRepository");

exports.getProducto = async function (body) {
  const query = {};
  const respLog = await productoRepository.getProducto(query);
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

exports.getByIdProducto = async function ( params) {
  console.log('paramas==>',params);
  const query = 
  {
    id: params.id,
  };
  const respLog = await productoRepository.getByIdProducto(query);
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


exports.registerProducto = async function (body) {
  const query = {
   codigo:body.codigo,
   codigo_alt:body.codigo_alt,
   descripcion:body.descripcion,
   estado:body.estado,
   cat_prod:body.cat_prod,
   uni_med:body.uni_med,
   tipo_stock:body.tipo_stock,
  };
  const respLog = await productoRepository.registerProducto(query);
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


exports.actualizarProducto = async function (body) {
  const query = {
    id:body.id,
    codigo:body.codigo,
    codigo_alt:body.codigo_alt,
    descripcion:body.descripcion,
    estado:body.estado,
    cat_prod:body.cat_prod,
    uni_med:body.uni_med,
    tipo_stock:body.tipo_stock,
  };
  const respLog = await productoRepository.actualizarProducto(query);
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


exports.eliminarProducto = async function (body) {
  const query = {id: body.id};
  const respLog = await productoRepository.eliminarProducto(query);
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