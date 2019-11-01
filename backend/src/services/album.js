const db = require('../config/db');
const responces = require('../libs/responces');
const success = require('../libs/success');
const errors = require('../libs/error');
const moment = require('moment');

async function add(req, res, next) {
    const { detail } = req.body;
    let data = req.files.map( (item) =>  item.filename );
    const picture = [];
    picture.push(data);
    const sql = `insert into album (album, detail) values ($1, $2)`
    const values= [ picture, detail ]
    try {
        if(req.files[0] !== undefined) {
            db.query(sql, values);
        } 
        if(req.files[0] === undefined) {
            return responces.error(res, errors.photo);
        }
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit(req, res, next) {
    const { detail } = req.body;
    let data = req.files.map( (item) =>  item.filename );
    const picture = [];
    picture.push(data);
    const date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const sql = `insert into album set album = $1, modifydate = $2, detail = $3 where albumid = $4`
    const values= [ picture, date, detail, req.params.id ]
    try {
        if(req.files[0] !== undefined) {
            db.query(sql, values);
        } 
        if(req.files[0] === undefined) {
            return responces.error(res, errors.photo);
        }
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists(req, res, next) {
    const sql = `select albumid, createdate, album, detail from album`
    try {
        const { rows } = await db.query(sql);
        return responces.success(res, success.success, rows);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists };