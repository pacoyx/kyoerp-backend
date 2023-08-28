const categoriaProdService = require('../services/categoriaProdService');

exports.getCategoriaProd = async function (req,res) {
    const body = req.body;
    const respLog = await categoriaProdService.getCategoriaProd(body);
    return res.json(respLog);
}

exports.getByIdCategoriaProd= async function (req,res) {
    const body = req.query;
    console.log('req.params',req.params);
    const respLog = await categoriaProdService.getByIdCategoriaProd(body);
    return res.json(respLog);
}

exports.registerCategoriaProd= async function (req,res) {
    const body = req.body;
    const respLog = await categoriaProdService.registerCategoriaProd(body);
    return res.json(respLog);
}

exports.actualizarCategoriaProd = async function (req,res) {
    const body = req.body;
    const respLog = await categoriaProdService.actualizarCategoriaProd(body);
    return res.json(respLog);
}

exports.eliminarCategoriaProd= async function (req,res) {
    const body = req.body;
    const respLog = await categoriaProdService.eliminarCategoriaProd(body);
    return res.json(respLog);
}