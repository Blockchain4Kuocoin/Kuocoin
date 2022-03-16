const models = require("../models/models");

//Mypage
exports.mypage_ProfileGet_Controllers = (req, res) => {
    models.mypage.mypage_ProfileGet_Models().then((result) => {
        res.send(result);
    });
};

exports.mypage_ProfilePut_Controllers = (req, res) => {
    exports.kuoname = req.body.kuoname;
    exports.kuopwd = req.body.kuopwd;
    exports.kuoadr = req.body.kuoadr;
    exports.id = req.body.id;
    models.mypage.mypage_ProfilePut_Models().then((result) => {
        res.send(result);
    });
};

//Kuos Api

exports.api_TestGet_Controllers = (req, res) => {
    models.api.api_TestGet_Models().then((result) => {
        // res.send(result);
        console.log(result);
    });
};

exports.api_Getnetworkinfo_Controllers = (req, res) => {
    models.api.api_Getnetworkinfo_Models().then((result) => {
        res.send(result);
    });
};

exports.api_Getblockcount_Controllers = (req, res) => {
    models.api.api_Getblockcount_Models().then((result) => {
        res.send(result);
    });
};

exports.api_Getnewaddress_Controllers = (req, res) => {
    // console.log('newaddress');
    // console.log(req.query);
    exports.account = req.query.account;
    models.api.api_Getnewaddress_Models().then((result) => {
        res.send(result);
    });
};

exports.api_Listaccounts_Controllers = (req, res) => {
    models.api.api_Listaccounts_Models().then((result) => {
        res.send(result);
    });
};

//Explorer

exports.explorer_ProfileGet_Controllers = (req, res) => {
    models.explorer.explorer_ProfileGet_Models().then((result) => {
        res.send(result);
    });
};

exports.explorer_ProfilePut_Controllers = (req, res) => {
    exports.kuoname = req.body.kuoname;
    exports.kuopwd = req.body.kuopwd;
    exports.kuoadr = req.body.kuoadr;
    exports.id = req.body.id;
    models.explorer.explorer_ProfilePut_Models().then((result) => {
        res.send(result);
    });
};
