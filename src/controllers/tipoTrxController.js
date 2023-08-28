const tipoTrxService = require('../services/tipoTrxService');

exports.getTipoTrx = async function (req,res) {
    const body = req.body;
    const respLog = await tipoTrxService.getTipoTrx(body);
    return res.json(respLog);
}

exports.getByIdTipoTrx= async function (req,res) {
    const body = req.query;
    console.log('req.params',req.params);
    const respLog = await tipoTrxService.getByIdTipoTrx(body);
    return res.json(respLog);
}

exports.registerTipoTrx= async function (req,res) {
    const body = req.body;
    const respLog = await tipoTrxService.registerTipoTrx(body);
    return res.json(respLog);
}

exports.actualizarTipoTrx = async function (req,res) {
    const body = req.body;
    const respLog = await tipoTrxService.actualizarTipoTrx(body);
    return res.json(respLog);
}

exports.eliminarTipoTrx= async function (req,res) {
    const body = req.body;
    const respLog = await tipoTrxService.eliminarTipoTrx(body);
    return res.json(respLog);
}