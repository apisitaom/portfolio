const db = require('../config/db');
const responces = require('../libs/responces');
const success = require('../libs/success');
const errors = require('../libs/error');

async function add(req, res, next) {
    const { title, result } = req.body;
    const sql = `insert into result (title, result) values ($1, $2)`
    const values = [ title, result ]
    try {
        db.query(sql, values);
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit(req, res, next) {
    const { title, result } = req.body;
    const sql = `update result set title = $1, result = $2 where resultid = $3`
    const values = [ title, result, req.params.id ]
    try {
        db.query(sql, values);
        return responces.success(res, success.updated);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists(req, res, next) {
    const sql = `select title, result from result order by createdate asc`
    try {
        const { rows } = await db.query(sql);
        return responces.success(res, success.success, rows);
    } catch (error) {
        return responces.error(res, errors.server);
    }   
}

async function deleted(req, res, next) {
    const sql = `delete from result where resultid = $1`
    try {
        db.query(sql, [req.params.id]);
        return responces.success(res, success.deleted);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists, deleted }