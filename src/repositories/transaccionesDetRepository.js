const auroraPool = require("../config/db/auroraConnection");

exports.getTransaccionesDet = async function (query) {
  try {
    const SP_PARAMETERS = [];
    const SP_QUERY = "CALL SP_S_TRANSACCIONES_DET();";
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

exports.registerTransaccionesDet= async function (query) {
  try {
    const SP_PARAMETERS = [
      query.idcab,
      query.idproducto,
      query.cantidad,
      query.uni_med,
      query.estado,
      query.observaciones,
      query.numlote,
      query.cod_almacen,
      query.tipo_trx,
    ];
    console.log('PARAMETROS::::::',SP_PARAMETERS);
    const SP_QUERY = "CALL SP_I_TRANSACCIONES_DET(?,?,?,?,?,?,?,?,?);";
    const respdb = await auroraPool.queryAsync(SP_QUERY, SP_PARAMETERS);
    console.log('affectedRows==>',respdb);
    if (respdb.affectedRows > 0) {
      return {
        estado: true,
        data: [],
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