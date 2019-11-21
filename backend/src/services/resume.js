const db = require('../config/db');
const responces = require('../libs/responces');
const success = require('../libs/success');
const errors = require('../libs/error');

async function add(req, res, next) {
    const { professional, experience, education, activity } = req.body;
    const sql = `insert into resume (professional, experience, education, activity) values ($1, $2, $3, $4)`
    const values = [ professional, experience, education, activity ]
    try {
        db.query(sql, values);
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit (req, res, next) {
    const { professional, experience, education, activity } = req.body;
    const sql = `update resume set professional = $1, experience = $2, education = $3, activity = $4 where resumeid = $5`
    const values = [ professional, experience, education, activity, req.params.id ]
    try {
        db.query(sql, values);
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists(req, res, next) {
    const sql = `select professional, experience, education, activity, resumeid from resume`
    try {
        const { rows } = await db.query(sql);
        return responces.success(res, success.success, rows)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists }