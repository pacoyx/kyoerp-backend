const uniMedidaService = require('../services/uniMedidaService');

exports.getUniMedida = async function (req,res) {
    const body = req.body;
    const respLog = await uniMedidaService.getUniMedida(body);
    return res.json(respLog);
}

exports.getByIdUniMedida= async function (req,res) {
    const body = req.query;
    console.log('req.params',req.params);
    const respLog = await uniMedidaService.getByIdUniMedida(body);
    return res.json(respLog);
}

exports.registerUniMedida= async function (req,res) {
    const body = req.body;
    const respLog = await uniMedidaService.registerUniMedida(body);
    return res.json(respLog);
}

exports.actualizarUniMedida = async function (req,res) {
    const body = req.body;
    const respLog = await  uniMedidaService.actualizarUniMedida(body);
    return res.json(respLog);
}

exports.eliminarUniMedida= async function (req,res) {
    const body = req.body;
    const respLog = await uniMedidaService.eliminarUniMedida(body);
    return res.json(respLog);
}