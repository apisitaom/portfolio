const db = require('../config/db');
const responces = require('../libs/responces');
const success = require('../libs/success');
const errors = require('../libs/error');
const moment = require('moment');

async function add(req, res, next) {
    const { detail, url, name, content } = req.body;
    const sql = `insert into album (album, detail, url, name, content) values ($1, $2, $3, $4, $5)`
    const values= [ req.files[0].filename, detail, url, name, content ]
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
    const { detail, url, name } = req.body;
    let data = req.files.map( (item) =>  item.filename );
    const picture = [];
    picture.push(data);
    const date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const sql = `update album set album = $1, modifydate = $2, detail = $3, url = $4, name = $5, content = $6 where albumid = $7`
    const values= [ picture, date, detail, url, name, content, req.params.id ]
    try {
        if(req.files[0] !== undefined) {
            db.query(sql, values);
        } 
        if(req.files[0] === undefined) {
            return responces.error(res, errors.photo);
        }
        return responces.success(res, success.updated);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists(req, res, next) {
    const sql = `select albumid, createdate, album, detail, url, name, content, albumid from album order by createdate asc`
    try {
        const { rows } = await db.query(sql);
        return responces.success(res, success.success, rows);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function deleted(req, res, next) {
    const sql = `delete from album where albumid = $1`
    try {
        db.query(sql, [req.params.id]);
        return responces.success(res, success.deleted);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists, deleted };