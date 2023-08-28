const auroraPool = require("../config/db/auroraConnection");

exports.getRol = async function (query) {
  try {
    const SP_PARAMETERS = [];
    const SP_QUERY = "CALL SP_S_ROL();";
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


exports.getByIdRol = async function (query) {
  console.log('query==>',query);
  try {
    const SP_PARAMETERS = [query.idrol];
    const SP_QUERY = "CALL SP_S_BYID_ROL(?);";
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


exports.registerRol = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.descripcion,
      query.estado,
    ];
    const SP_QUERY = "CALL SP_I_ROL(?,?);";
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


exports.actualizarRol = async function (query) {
  console.log("parametros queryRepo", query)
  try {
    const SP_PARAMETERS = [
      query.idrol,
      query.descripcion,
      query.estado,
    ];
    const SP_QUERY = "CALL SP_U_ROL(?,?,?);";
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


exports.eliminarRol = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.idrol,
    ];
    const SP_QUERY = "CALL SP_D_ROL(?);";
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


