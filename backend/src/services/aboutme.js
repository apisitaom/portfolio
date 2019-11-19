const db = require('../config/db');
const responces = require('../libs/responces');
const success = require('../libs/success');
const errors = require('../libs/error');

async function add(req, res, next) {
    const { aboutme, hobby, interest, family, address } = req.body;
    const sql = `insert into aboutme (aboutme, hobby, interest, family, address) values ($1, $2, $3, $4, $5)`
    const values = [ aboutme, hobby, interest, family, address ]
    try {
        db.query(sql, values);
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit (req, res, next) {
    const { aboutme, hobby, interest, family, address } = req.body;
    const sql = `update aboutme set aboutme = $1, hobby = $2, interest = $3, family = $4, address = $5 where aboutid = $6`
    const values = [ aboutme, hobby, interest, family, address, req.params.id ]
    try {
        db.query(sql, values);
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists(req, res, next) {
    const sql = `select aboutme, hobby, interest, family, address from aboutme`
    try {
        const { rows } = await db.query(sql);
        return responces.success(res, success.success, rows)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists }