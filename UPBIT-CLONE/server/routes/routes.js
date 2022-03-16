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


//Mypage
router.get('/mypage', controllers.mypage_ProfileGet_Controllers);
router.put('/mypage', controllers.mypage_ProfilePut_Controllers);


//Kuos api
router.get('/test', controllers.api_TestGet_Controllers);
router.get('/api/getnetworkinfo', controllers.api_Getnetworkinfo_Controllers);
router.get('/api/getblockcount', controllers.api_Getblockcount_Controllers);
router.get('/api/getnewaddress', controllers.api_Getnewaddress_Controllers);
router.get('/api/listaccounts', controllers.api_Listaccounts_Controllers);
module.exports = router;


//Explorer
router.get('/explorer/blockname/blocknumber', controllers.explorer_ProfileGet_Controllers);
// router.put('/explorer', controllers.explorer_ProfilePut_Controllers);
router.get('/blockname', controllers.blockname_ProfileGet_Controllers);
// router.put('/explorer', controllers.explorer_ProfilePut_Controllers);