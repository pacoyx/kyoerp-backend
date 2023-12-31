const auroraPool = require("../config/db/auroraConnection");

exports.getLogin = async function (query) {
  try {
    const SP_PARAMETERS = [
       query.correo,
       query.clave,
    ];
    const SP_QUERY = "CALL SP_S_LOGIN(?,?);";
    const [affectedRows] = await auroraPool.queryAsync(SP_QUERY, SP_PARAMETERS);
    if (affectedRows.length > 0) {
      return {
        estado: true,
        data: affectedRows,
      };
    } else {
      return {
        estado: false,
        data: [],
      };
    }
  } catch (error) {
    console.error(error);
    return {
      estado: false,
      error: error,
    };
  }
};