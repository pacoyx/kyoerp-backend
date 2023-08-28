const productoService = require('../services/productoService');

exports.getProducto = async function (req,res) {
    const body = req.body;
    const respLog = await productoService.getProducto(body);
    return res.json(respLog);
}

exports.getByIdProducto= async function (req,res) {
    const body = req.query;
    console.log('req.params',req.params);
    const respLog = await productoService.getByIdProducto(body);
    return res.json(respLog);
}

exports.registerProducto= async function (req,res) {
    const body = req.body;
    const respLog = await productoService.registerProducto(body);
    return res.json(respLog);
}

exports.actualizarProducto = async function (req,res) {
    const body = req.body;
    const respLog = await productoService.actualizarProducto(body);
    return res.json(respLog);
}

exports.eliminarProducto= async function (req,res) {
    const body = req.body;
    const respLog = await productoService.eliminarProducto(body);
    return res.json(respLog);
}