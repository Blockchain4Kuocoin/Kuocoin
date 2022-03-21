const request = require("request");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");
const con = require("../utils/mysqlcon");

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
        var dataString = `{
            "jsonrpc":"1.0",
            "id":"${ID_STRING}",
            "method":"getnetworkinfo",
            "params":[]
        }`;

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
    });
};

modelExports.api_Getblockcount_Models = () => {
    return new Promise((resolve, reject) => {
        var dataString = `{
            "jsonrpc":"1.0", 
            "id":"${ID_STRING}", 
            "method":"getblockcount",
            "params":[]
        }`;
    
        var options = {
            url: `http://${USER}:${PASS}@127.0.0.1:${PORT}`,
            method: "POST",
            headers: headers,
            body: dataString,
        };

        callback = (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                resolve(data);
            }
        }
        request(options, callback);
    });
};

modelExports.api_Getnewaddress_Models = () => {
    const account = controllers.account;

    return new Promise((resolve, reject) => {
        var dataString = `{
            "jsonrpc":"1.0", 
            "id":"${ID_STRING}", 
            "method":"getnewaddress",
            "params":["${account}"]
        }`;
    
        var options = {
            url: `http://${USER}:${PASS}@127.0.0.1:${PORT}`,
            method: "POST",
            headers: headers,
            body: dataString,
        };

        callback = (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                resolve(data);
            }
        }
        request(options, callback);
    });
};

modelExports.api_Listaccounts_Models = () => {
    return new Promise((resolve, reject) => {
        var dataString = `{
            "jsonrpc":"1.0", 
            "id":"${ID_STRING}", 
            "method":"listaccounts",
            "params":[]
        }`;
    
        var options = {
            url: `http://${USER}:${PASS}@127.0.0.1:${PORT}`,
            method: "POST",
            headers: headers,
            body: dataString,
        };

        callback = (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                resolve(data);
            }
        }
        request(options, callback);
    });
};

modelExports.api_Getblockhash_Models = () => {

    const blocknum = controllers.blocknum;
    
    return new Promise((resolve, reject) => {
        var dataString = `{
            "jsonrpc":"1.0",  
            "method":"getblockhash",
            "params":[${blocknum}]
        }`;
    
        var options = {
            url: `http://${USER}:${PASS}@127.0.0.1:${PORT}`,
            method: "POST",
            headers: headers,
            body: dataString,
        };

        callback = (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                resolve(data);
            }
        }
        request(options, callback);
    });
};

modelExports.api_Getblock_Models = () => {
    
    const block = controllers.block;
    console.log(block);

    return new Promise((resolve, reject) => {
        var dataString = `{
            "jsonrpc":"1.0", 
            "id":"${ID_STRING}", 
            "method":"getblock",
            "params":["${block}"]
        }`;
    
        var options = {
            url: `http://${USER}:${PASS}@127.0.0.1:${PORT}`,
            method: "POST",
            headers: headers,
            body: dataString,
        };

        callback = (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                resolve(data);
            }
        }
        request(options, callback);
    });
};
