const db = require('../config/db');
const responces = require('../libs/responces');
const success = require('../libs/success');
const errors = require('../libs/error');
const moment = require('moment');

async function add(req, res, next) {
    const { name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other, interest, text } = req.body;
    const sql = `insert into 
    owner 
    (picture, name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other, interest, text)
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)`
    const values = [req.files[0].filename, name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other, interest, text]
    const sqlnopicture = `insert into 
    owner 
    ( name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other, interest, text)
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`
    const valuesnopicture = [ name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other, interest, text ]
    try {
        if(req.files[0] !== undefined) {
            db.query(sql, values);
        } else {
            db.query(sqlnopicture, valuesnopicture);
        }
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit(req, res, next) {
    const { name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, other, text, email, ig } = req.body;
    const date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const sqlnopicture = `update 
    owner 
    set name = $1, phonnumber = $2, address = $3, subdistrict = $4, district = $5, provicne = $6, zipcode = $7, facebook = $8, github = $9, gitlab = $10, okta = $11, age = $12, gender = $13, birthday = $14, other = $15, modifydate = $16, text = $17, email = $18, ig = $19 
    where ownerid = $20`
    const valuesnopicture = [ name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, other, date, text, email, ig, req.params.id ]
    try {
        db.query(sqlnopicture, valuesnopicture);
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists (req, res, next) {
    const sql = `select picture, name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other, interest, text, email, ig, ownerid from owner`
    try {
        const { rows } = await db.query(sql);
        return responces.success(res, success.success, rows);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists }