const db = require('../config/db');
const responces = require('../libs/responces');
const success = require('../libs/success');
const errors = require('../libs/error');
const moment = require('moment');

async function add(req, res, next) {
    const { picture, name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other } = req.body;
    // if( !picture !== undefined || !name !== undefined || !phonnumber !== undefined || !address !== undefined || !subdistrict !== undefined || !district !== undefined || !provicne !== undefined || !zipcode !== undefined || !facebook !== undefined ||
    //     !github !== undefined || !gitlab !== undefined || !okta !== undefined || !age !== undefined || !gender !== undefined || !birthday !== undefined || !education !== undefined || !other !== undefined) {
    //     return responces.error(res, errors.params);
    // }
    const sql = `insert into 
    owner 
    (picture, name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other)
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`
    const values = [picture, name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other]
    const sqlnopicture = `insert into 
    owner 
    ( name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other)
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`
    const valuesnopicture = [ name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other]
    try {
        if(!picture) {
            db.query(sqlnopicture, valuesnopicture);
        } else {
            db.query(sql, values);
        }
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit(req, res, next) {
    const { picture, name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other } = req.body;
    // if( !picture !== undefined || !name !== undefined || !phonnumber !== undefined || !address !== undefined || !subdistrict !== undefined || !district !== undefined || !provicne !== undefined || !zipcode !== undefined || !facebook !== undefined ||
    //     !github !== undefined || !gitlab !== undefined || !okta !== undefined || !age !== undefined || !gender !== undefined || !birthday !== undefined || !education !== undefined || !other !== undefined) {
    //     return responces.error(res, errors.params);
    // }
    const date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const sql = `update 
    owner 
    set name = $1, phonnumber = $2, address = $3, subdistrict = $4, district = $5, provicne = $6, zipcode = $7, facebook = $8, github = $9, gitlab = $10, okta = $11, age = $12, gender = $13, birthday = $14, education = $15, other = $16, picture = $17, modifydate = $18 
    where ownerid = $19`
    const values = [ name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other, picture, date,'insert ownerid here']
    const sqlnopicture = `update 
    owner 
    set name = $1, phonnumber = $2, address = $3, subdistrict = $4, district = $5, provicne = $6, zipcode = $7, facebook = $8, github = $9, gitlab = $10, okta = $11, age = $12, gender = $13, birthday = $14, education = $15, other = $16, modifydate = $17 
    where ownerid = $18`
    const valuesnopicture = [ name, phonnumber, address, subdistrict, district, provicne, zipcode, facebook, github, gitlab, okta, age, gender, birthday, education, other, date, 'insert ownerid here']
    try {
        if(!picture) {
            db.query(sqlnopicture, valuesnopicture);
        } else {
            db.query(sql, values);
        }
        return responces.success(res, success.success);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = {
    add,
    edit
}