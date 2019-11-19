const db = require('../config/db');
const responces = require('../libs/responces');
const success = require('../libs/success');
const errors = require('../libs/error');

async function add(req, res, next) {
    const { comment } = req.body;
    const sql = `insert into comment (comment) values ($1)`
    const values = [ comment ]
    try {
        db.query(sql, values);
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}


async function lists(req, res, next) {
    const sql = `select comment from comment`
    try {
        const { rows } = await db.query(sql);
        return responces.success(res, success.success, rows)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, lists }