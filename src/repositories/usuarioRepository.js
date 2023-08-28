const auroraPool = require("../config/db/auroraConnection");

exports.getUsuario = async function (query) {
  try {
    const SP_PARAMETERS = [];
    const SP_QUERY = "CALL SP_S_USUARIO();";
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


exports.getByIdUsuario = async function (query) {
  console.log('query==>',query);
  try {
    const SP_PARAMETERS = [query.correo];
    const SP_QUERY = "CALL SP_S_BYID_USUARIO(?);";
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

exports.registerUsuario = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.correo,
      query.clave,
      query.nombre,
      query.estado,
      query.rol_id,
    ];
    const SP_QUERY = "CALL SP_I_USUARIO(?,?,?,?,?);";
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


exports.actualizarUsuario = async function (query) {
  console.log("parametros queryRepo", query)
  try {
    const SP_PARAMETERS = [
        query.correo,
        query.clave,
        query.nombre,
        query.estado,
        query.rol_id,
    ];
    const SP_QUERY = "CALL SP_U_USUARIO(?,?,?,?,?);";
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


exports.eliminarUsuario= async function (query) {
  try {
    const SP_PARAMETERS = [
      query.correo,
    ];
    const SP_QUERY = "CALL SP_D_USUARIO(?);";
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


