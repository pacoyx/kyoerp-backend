const auroraPool = require("../config/db/auroraConnection");

exports.getByStockProductoLote = async function (query) {
    console.log('query==>',query);
    try {
      const SP_PARAMETERS = [query.resumido];
      const SP_QUERY = "CALL SP_S_STOCK_PRODUCTO_RESUMIDO_DETALLADO(?);";
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