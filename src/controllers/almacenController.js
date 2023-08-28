const almacenService = require('../services/almacenService');

exports.getAlmacen = async function (req,res) {
    const body = req.body;
    const respLog = await almacenService.getAlmacen(body);
    return res.json(respLog);
}

exports.getByIdAlmacen= async function (req,res) {
    const body = req.query;
    console.log('req.params',req.params);
    const respLog = await almacenService.getByIdAlmacen(body);
    return res.json(respLog);
}

exports.registerAlmacen= async function (req,res) {
    const body = req.body;
    const respLog = await almacenService.registerAlmacen(body);
    return res.json(respLog);
}

exports.actualizarAlmacen = async function (req,res) {
    const body = req.body;
    const respLog = await almacenService.actualizarAlmacen(body);
    return res.json(respLog);
}

exports.eliminarAlmacen= async function (req,res) {
    const body = req.body;
    const respLog = await almacenService.eliminarAlmacen(body);
    return res.json(respLog);
}