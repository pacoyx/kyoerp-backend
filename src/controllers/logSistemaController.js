
const logSistemaService = require('../services/logSistemaService');


exports.getLogSistema = async function (req,res) {
    const body = req.body;
    const respLog = await logSistemaService.getLogSistema(body);
    return res.json(respLog);
}

exports.registerLogSistema = async function (req,res) {
    const body = req.body;
    const respLog = await logSistemaService.registerLogSistema(body);
    return res.json(respLog);
}

exports.actualizarLogSistema = async function (req,res) {
    const body = req.body;
    const respLog = await logSistemaService.actualizarLogSistema(body);
    return res.json(respLog);
}

exports.eliminarLogSistema = async function (req,res) {
    const body = req.body;
    const respLog = await logSistemaService.eliminarLogSistema(body);
    return res.json(respLog);
}



