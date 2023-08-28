const usuarioRepository = require("../repositories/usuarioRepository");

exports.getUsuario = async function (body) {
  const query = {};
  const respLog = await usuarioRepository.getUsuario(query);
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


exports.getByIdUsuario = async function ( params) {
  const query = 
  {
    correo: params.correo,
  };
  const respLog = await usuarioRepository.getByIdUsuario(query);
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

exports.registerUsuario= async function (body) {
  const query = {
   correo: body.correo,
   clave: body.clave,
   nombre: body.nombre,
   estado: body.estado,
   rol_id: body.rol_id,
  };
  const respLog = await usuarioRepository.registerUsuario(query);
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



exports.actualizarUsuario = async function (body) {
  const query = {
    correo: body.correo,
    clave: body.clave,
    nombre: body.nombre,
    estado: body.estado,
    rol_id:body.rol_id,
  };
  const respLog = await usuarioRepository.actualizarUsuario(query);
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


exports.eliminarUsuario = async function (body) {
  const query = {correo: body.correo};
  const respLog = await usuarioRepository.eliminarUsuario(query);
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