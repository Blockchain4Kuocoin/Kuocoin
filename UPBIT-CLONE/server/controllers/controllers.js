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
}
