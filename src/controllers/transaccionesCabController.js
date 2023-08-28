const transaccionesCabService = require('../services/transaccionesCabService');

exports.getTransaccionesCab = async function (req,res) {
    const body = req.body;
    const respLog = await transaccionesCabService.getTransaccionesCab(body);
    return res.json(respLog);
}

exports.registerTransaccionesCab= async function (req,res) {
    const body = req.body;
    const respLog = await transaccionesCabService.registerTransaccionesCab(body);
    return res.json(respLog);
}