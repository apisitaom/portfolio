const db = require('../config/db');
const responces = require('../libs/responces');
const success = require('../libs/success');
const errors = require('../libs/error');
const middle = require('../libs/middle');

async function login(req, res, next) {
    const { email, password } = req.body;
    const sql = `select * from login where email = $1`;
    if(!email || !password) {
        return responces.error(res, errors.params);
    }
    if(!middle.isValidEmail(email)) {
        return responces.error(res, errors.email);
    }
    try {
        const { rows } = await db.query(sql, [email]);
        if(!rows[0]) {
            return responces.error(res, errors.server);
        }
        const token = middle.generateToken(rows[0].id);
        return responces.token(res, success.success, '', token);
    } catch (error) {
        return responces.error(res, errors.server);
    } 
}
module.exports = {
    login
}