const auroraPool = require("../config/db/auroraConnection");

exports.getTipoTrx = async function (query) {
  try {
    const SP_PARAMETERS = [];
    const SP_QUERY = "CALL SP_S_TIPO_TRX();";
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


exports.getByIdTipoTrx = async function (query) {
  console.log('query==>',query);
  try {
    const SP_PARAMETERS = [query.codigo];
    const SP_QUERY = "CALL SP_S_BYID_TIPO_TRX(?);";
    const [affectedRows] = await auroraPool.queryAsync(SP_QUERY, SP_PARAMETERS);
    console.log('affectedRows==>',affectedRows);
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


exports.registerTipoTrx = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.codigo,
      query.descripcion,
      query.tipo_movi,
    ];
    const SP_QUERY = "CALL SP_I_TIPO_TRX(?,?,?);";
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


exports.actualizarTipoTrx = async function (query) {
  console.log("parametros queryRepo", query)
  try {
    const SP_PARAMETERS = [
        query.codigo,
        query.descripcion,
        query.tipo_movi,
    ];
    const SP_QUERY = "CALL SP_U_TIPO_TRX(?,?,?);";
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


exports.eliminarTipoTrx = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.codigo,
    ];
    const SP_QUERY = "CALL SP_D_TIPO_TRX(?);";
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
