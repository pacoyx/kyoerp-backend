const auroraPool = require("../config/db/auroraConnection");

exports.getDocuAlmacen = async function (query) {
  try {
    const SP_PARAMETERS = [];
    const SP_QUERY = "CALL SP_S_DOCU_ALMACEN();";
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


exports.getByIdDocuAlmacen = async function (query) {
  console.log('query==>',query);
  try {
    const SP_PARAMETERS = [query.codigo];
    const SP_QUERY = "CALL SP_S_BYID_DOCU_ALMACEN(?);";
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


exports.registerDocuAlmacen = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.codigo,
      query.descripcion,
      query.estado,
      query.codigo_sunat,
    ];
    const SP_QUERY = "CALL SP_I_DOCU_ALMACEN(?,?,?,?);";
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


exports.actualizarDocuAlmacen = async function (query) {
  console.log("parametros queryRepo", query)
  try {
    const SP_PARAMETERS = [
        query.codigo,
        query.descripcion,
        query.estado,
        query.codigo_sunat,
    ];
    const SP_QUERY = "CALL SP_U_DOCU_ALMACEN(?,?,?,?);";
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


exports.eliminarDocuAlmacen = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.codigo,
    ];
    const SP_QUERY = "CALL SP_D_DOCU_ALMACEN(?);";
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