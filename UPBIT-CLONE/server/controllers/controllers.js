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

//Signup & login
exports.signup_Controllers = (req, res) => {
    console.log("signup!");
    exports.sid = req.body.id;
    exports.spw = req.body.pw;
    exports.sname = req.body.name;
    models.auth.signup_Models().then((result) => {
        res.send(result);
    });
};

exports.login_Controllers = (req, res) => {
    exports.lid = req.query.id;
    exports.lpw = req.query.pw;
    models.auth.login_Models().then((result) => {
        res.send(result);
    })
}


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