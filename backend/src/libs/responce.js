async function success(res, msgs, datas) {
    res.send({
        code: 200,
        msg: msgs,
        data: datas
    });
}

async function error(res, msgs, datas) {
    res.send({
        code: 500,
        msg: msgs,
        data: datas
    });
}

async function token(res, msgs, datas, tokens) {
    res.send({
        code: 200,
        msg: msgs,
        data: datas,
        token: tokens
    });
}

module.exports = { success, error, token }