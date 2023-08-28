const transaccionAlmacenService= require('../services/transaccionAlmacenService');

exports.registerTransaccionAlmacen= async function (req,res) {
    const body = req.body;
    const respLog = await transaccionAlmacenService.registerTransaccionAlmacen(body);
    return res.json(respLog);
}