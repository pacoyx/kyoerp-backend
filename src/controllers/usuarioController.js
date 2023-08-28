const usuarioService = require('../services/usuarioService');


// usuario

exports.getUsuario = async function (req,res) {
    const body = req.body;
    const respLog = await usuarioService.getUsuario(body);
    return res.json(respLog);
}

exports.getByIdUsuario = async function (req,res) {
    const body = req.query;
    const respLog = await usuarioService.getByIdUsuario(body);
    return res.json(respLog);
}

exports.registerUsuario = async function (req,res) {
    const body = req.body;
    const respLog = await usuarioService.registerUsuario(body);
    return res.json(respLog);
}

exports.actualizarUsuario = async function (req,res) {
    const body = req.body;
    const respLog = await usuarioService.actualizarUsuario(body);
    return res.json(respLog);
}

exports.eliminarUsuario = async function (req,res) {
    const body = req.body;
    const respLog = await usuarioService.eliminarUsuario(body);
    return res.json(respLog);
}
