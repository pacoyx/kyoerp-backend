const rolService = require('../services/rolService');

exports.getRol = async function (req,res) {
    const body = req.body;
    const respLog = await rolService.getRol(body);
    return res.json(respLog);
}

exports.getByIdRol = async function (req,res) {
    const body = req.query;
    console.log('req.params',req.params);
    const respLog = await rolService.getByIdRol(body);
    return res.json(respLog);
}

exports.registerRol= async function (req,res) {
    const body = req.body;
    const respLog = await rolService.registerRol(body);
    return res.json(respLog);
}

exports.actualizarRol = async function (req,res) {
    const body = req.body;
    const respLog = await rolService.actualizarRol(body);
    return res.json(respLog);
}

exports.eliminarRol = async function (req,res) {
    const body = req.body;
    const respLog = await rolService.eliminarRol(body);
    return res.json(respLog);
}
