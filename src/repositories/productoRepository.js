const auroraPool = require("../config/db/auroraConnection");

exports.getProducto = async function (query) {
  try {
    const SP_PARAMETERS = [];
    const SP_QUERY = "CALL SP_S_PRODUCTO();";
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


exports.getByIdProducto = async function (query) {
  console.log('query==>',query);
  try {
    const SP_PARAMETERS = [query.id];
    const SP_QUERY = "CALL SP_S_BYID_PRODUCTO(?);";
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


exports.registerProducto = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.codigo,
      query.codigo_alt,
      query.descripcion,
      query.estado,
      query.cat_prod,
      query.uni_med,
      query.tipo_stock
    ];
    const SP_QUERY = "CALL SP_I_PRODUCTO(?,?,?,?,?,?,?);";
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


exports.actualizarProducto = async function (query) {
  console.log("parametros queryRepo", query)
  try {
    const SP_PARAMETERS = [
        query.id,
        query.codigo,
        query.codigo_alt,
        query.descripcion,
        query.estado,
        query.cat_prod,
        query.uni_med,
        query.tipo_stock
    ];
    const SP_QUERY = "CALL SP_U_PRODUCTO(?,?,?,?,?,?,?,?);";
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


exports.eliminarProducto = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.id,
    ];
    const SP_QUERY = "CALL SP_D_PRODUCTO(?);";
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

