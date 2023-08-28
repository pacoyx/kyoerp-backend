const auroraPool = require("../config/db/auroraConnection");

exports.getTransaccionesCab= async function (query) {
  try {
    const SP_PARAMETERS = [];
    const SP_QUERY = "CALL SP_S_TRANSACCIONES_CAB();";
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

exports.registerTransaccionesCab= async function (query) {
  try {
    const SP_PARAMETERS = [
      query.tipo_trx,
      query.cod_almacen,
      query.cod_doc_ref,
      query.ser_doc_ref,
      query.num_doc_ref,
      query.estado,
      query.usuario,
      query.observaciones,
      query.obs_estado,
    ];
    const SP_QUERY = "CALL SP_I_TRANSACCIONES_CAB(?,?,?,?,?,?,?,?,?);";
    const [affectedRows] = await auroraPool.queryAsync(SP_QUERY, SP_PARAMETERS);
    console.log('affectedRows==>',[affectedRows]);
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