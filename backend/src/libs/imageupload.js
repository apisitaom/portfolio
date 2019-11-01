const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: ('./public/images/'),
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + new Date().getTime().toString() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024 // 2MB
    },
    fileFilter: function(req, file, cb) {
        const ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return cb(new Error('On ly images are allowed'));
        }
        cb(null, true);
    }
}).array('picture', 10);

module.exports = { upload };
