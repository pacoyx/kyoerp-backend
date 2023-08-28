const transaccionesDetService = require('../services/transaccionesDetService');

exports.getTransaccionesDet = async function (req,res) {
    
    const body = req.body;
    const respLog = await transaccionesDetService.getTransaccionesDet(body);
    return res.json(respLog);
}

exports.registerTransaccionesDet= async function (req,res) {
    const body = req.body;
    const respLog = await transaccionesDetService.registerTransaccionesDet(body);
    return res.json(respLog);
}