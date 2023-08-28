const stockService = require('../services/stockService');

exports.getStock = async function (req,res) {
    const body = req.body;
    const respLog = await stockService.getStock(body);
    return res.json(respLog);
}

exports.registerStock= async function (req,res) {
    const body = req.body;
    const respLog = await stockService.registerStock(body);
    return res.json(respLog);
}