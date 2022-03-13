const request = require("request");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

const dotenv = require('dotenv');
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const PORT = 9776;
const ACCOUNT = "sky";
const ID_STRING = "kuoscoin_id";
const headers = {
    "content-type" : "text/plain;"
};

modelExports.api_TestGet_Models = () => {
    return new Promise((resolve, reject) => {
        resolve({msg: "backend works!!!"});
    });      
};

modelExports.api_Getnetworkinfo_Models = () => {
    return new Promise((resolve, reject) => {
        var dataString = `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getnetworkinfo","params":[]}`;
        var options = {
            url: `http://${USER}:${PASS}@127.0.0.1:${PORT}/`,
            method: "POST",
            headers: headers,
            body: dataString
        };

        callback = (error, response, body) => {
            if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            resolve(data);
            }
        };
        request(options, callback);
    })

}