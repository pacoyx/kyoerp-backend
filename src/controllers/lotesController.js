const lotesService = require('../services/lotesService');

exports.getLotes= async function (req,res) {
    const body = req.body;
    const respLog = await lotesService.getLotes(body);
    return res.json(respLog);
}

exports.getByIdLotes= async function (req,res) {
    const body = req.query;
    console.log('req.params',req.params);
    const respLog = await lotesService.getByIdLotes(body);
    return res.json(respLog);
}

exports.registerLotes= async function (req,res) {
    const body = req.body;
    const respLog = await lotesService.registerLotes(body);
    return res.json(respLog);
}

exports.actualizarLotes = async function (req,res) {
    const body = req.body;
    const respLog = await lotesService.actualizarLotes(body);
    return res.json(respLog);
}

exports.eliminarLotes = async function (req,res) {
    const body = req.body;
    const respLog = await lotesService.eliminarLotes (body);
    return res.json(respLog);
}