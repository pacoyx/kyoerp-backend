const auroraPool = require("../config/db/auroraConnection");

exports.getStock = async function (query) {
  try {
    const SP_PARAMETERS = [];
    const SP_QUERY = "CALL SP_S_STOCK();";
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

exports.registerStock  = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.cod_almacen,
      query.idprod,
      query.lote,
      query.stock,
    ];
    const SP_QUERY = "CALL SP_I_STOCK(?,?,?,?);";
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