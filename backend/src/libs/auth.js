const db = require('../config/db');
const middle = require('../libs/middle');
const responces = require('../libs/responces');
const errors = require('../libs/error');

async function loginVerifyToken(req, res, next) {
  const { headers } = req;
  const subtoken = headers.authorization.split(' ');
  const token = subtoken[1];
  const decode = middle.verifyToken(token);
  const sql = `select * from login where loginid = $1`
  if(!token) {
    return responces.error(res, errors.token);
  }
    try {
        const { rows } = await db.query(sql, [decode.data.id]);
        if(!rows[0]) {
            return responces.error(res, errors.token);
        }
        req.user = { id: decode.data.id };
        next();
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { loginVerifyToken };

