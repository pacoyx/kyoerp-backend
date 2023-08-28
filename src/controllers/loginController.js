
const loginService = require('../services/loginService');


exports.getLogin = async function (req,res) {
    const body = req.body;
    const respLog = await loginService.getLogin(body);
    return res.json(respLog);
}