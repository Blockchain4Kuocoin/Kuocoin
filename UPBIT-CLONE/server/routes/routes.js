const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

const multer = require('multer');
const { v4: uuid } = require('uuid'); 
const mime = require('mime-types');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
        done(null, 'public/uploads');    //public/upload 폴더에 이미지 업로드
        },
        filename(req, file, done) {
        done(null, `${uuid()}.${mime.extension(file.mimetype)}`);
        },
    })
});

router.get('/mypage', controllers.mypage_ProfileGet_Controllers);
router.put('/mypage', controllers.mypage_ProfilePut_Controllers);

module.exports = router;
