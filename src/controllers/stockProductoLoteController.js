const stockProductoLoteService = require('../services/stockProductoLoteService');

exports.getByStockProductoLote = async function (req,res) {
    const body = req.query;
    console.log('req.params',req.params);
    const respLog = await stockProductoLoteService.getByStockProductoLote(body);
    return res.json(respLog);
}