const db = require('../config/db');
const responces = require('../libs/responces');
const success = require('../libs/success');
const errors = require('../libs/error');
const moment = require('moment');

async function add(req, res, next) {
    const { name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other } = req.body;
    const sql = `insert into 
    owner 
    (name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other)
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`
    const values = [name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other]
    try {
        db.query(sql, values);
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit(req, res, next) {
    const sql = `update 
    owner 
    set name = $1, phonnumber = $2, address = $3, subdistrict = $4, district = $5, provicne = $6, zipcode = $7, facebook = $8, github = $9, gitlab = $10, okta = $11, age = $12, gender = $13, birthday = $14, education = $15, other = $16 
    where ownerid = $17`
    const values = [name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other, 'insert ownerid here']
    try {
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = {
    add,
    edit
}