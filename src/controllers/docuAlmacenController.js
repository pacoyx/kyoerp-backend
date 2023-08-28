const docuAlmacenService = require('../services/docuAlmacenService');

exports.getDocuAlmacen = async function (req,res) {
    const body = req.body;
    const respLog = await docuAlmacenService.getDocuAlmacen(body);
    return res.json(respLog);
}

exports.getByIdDocuAlmacen= async function (req,res) {
    const body = req.query;
    console.log('req.params',req.params);
    const respLog = await docuAlmacenService.getByIdDocuAlmacen(body);
    return res.json(respLog);
}

exports.registerDocuAlmacen= async function (req,res) {
    const body = req.body;
    const respLog = await docuAlmacenService.registerDocuAlmacen(body);
    return res.json(respLog);
}

exports.actualizarDocuAlmacen = async function (req,res) {
    const body = req.body;
    const respLog = await docuAlmacenService.actualizarDocuAlmacen(body);
    return res.json(respLog);
}

exports.eliminarDocuAlmacen= async function (req,res) {
    const body = req.body;
    const respLog = await docuAlmacenService.eliminarDocuAlmacen(body);
    return res.json(respLog);
}