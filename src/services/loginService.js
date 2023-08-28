const loginRepository = require("../repositories/loginRepository");
const jwt = require("jsonwebtoken");

const jwtKey = process.env.jwtKey;
const jwtExpirySeconds = 300 ;

exports.getLogin = async function (body) {
  const query = {
    correo: body.correo,
    clave: body.clave,

  };
  const respLog = await loginRepository.getLogin(query);
  if (!respLog.estado) {
    const resp = {
      codigoRespuesta: "99",
      error: respLog.error,
    };
    return resp;
  }

  const token = jwt.sign({ usuario: body.correo}, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
  });
  console.log("token:", token);

  const respOk = {
    codigoRespuesta: "00",
    data: respLog.data,
    token: token,
  };

  return respOk;
};