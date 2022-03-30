const models = require("../models/models");

//Mypage
exports.mypage_ProfileGet_Controllers = (req, res) => {
    exports.mid = req.query.id;
    models.mypage.mypage_ProfileGet_Models().then((result) => {
        res.send(result);
    });
};

exports.mypage_ProfilePut_Controllers = (req, res) => {
    console.log(req.body);
    exports.pname = req.body.name;
    exports.ppw = req.body.pw;
    exports.pid = req.body.id;
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
        console.log(result.msg);
        // if (result.msg ==="success!") {
        //     const { spawn } = require('child_process');

        //     const makedir = spawn("cmd", ['/c', `cd /home/data & mkdir ${req.query.id}`]);
        //     const fs = require('fs');
        //     fs.writeFileSync(`/home/daemon/${req.query.id}.bat`, `.\\kigacoind.exe -conf=C:\\home\\kigacoin.conf -datadir=C:\\home\\data\\${req.query.id} -printtoconsole`);
        //     // '.\kigacoind.exe -conf=C:\workspace\kigacoin_win_bin\kigacoin.conf -datadir=C:\workspace\kigacoin_win_bin\data -printtoconsole'
        //     const child = spawn("cmd", ['/c', `cd /home/daemon & ${req.query.id}`]);

        //     child.stdout.on('data', (data) => {
        //         console.log(`stdout: ${data}`);
        //     });

        //     child.stderr.on('data', (data) => {
        //         console.log(`stderr: ${data}`);
        //     });

        //     child.on('error', (error) => console.log(`error: ${error.message}`));

        //     child.on('exit', (code, signal) => {
        //         if (code) console.log(`Process exit with code: ${code}`);
        //         if (signal) console.log(`Process killed with signal: ${signal}`);
        //         console.log(`Done!`)
        //     });
        // }
    });
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

exports.api_Getblockhash_Controllers = (req, res) => {
    exports.blocknum = Number(req.query.blocknum);
    models.api.api_Getblockhash_Models().then((result) => {
        res.send(result);
    });
};

exports.api_Getblock_Controllers = (req, res) => {
    exports.block = req.query.block;
    models.api.api_Getblock_Models().then((result) => {
        res.send(result);
    });
};

//Explorer

exports.explorer_Controllers = (req, res) => {
    exports.height = req.params.height;
    models.explorer.explorer_Models().then((result) => {
        res.send(result);
    });
};

exports.blockHeight_Controllers = (req, res) => {
    exports.blocks = req.query.height
    models.explorer.blockHeight_Models().then((result) => {
        res.send(result);
    });
};

exports.latestblocks_Controllers = (req, res) => {
    models.explorer.latestBlocks_Models().then((result) => {
        res.send(result);
    });
};
