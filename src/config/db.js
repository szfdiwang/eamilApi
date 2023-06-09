const { Sequelize } = require('sequelize');
const { env } = require("./config");
let config = {
    database: 'subscribe', // 使用哪个数据库
    username: 'root', // 用户名
    password: '123456', // 口令
    host: '192.168.18.34', // 主机名
    port: 3306 // 端口号，MySQL默认3306
};

switch (env) {
    case "dev":
        config = {
            database: 'topos', // 使用哪个数据库
            username: 'topos_rw', // 用户名
            password: 'Abc@123!', // 口令
            host: '192.168.18.204', // 主机名
            port: 3306 // 端口号，MySQL默认3306
        };
        break;
    case "test":
        config = {
            database: 'topos', // 使用哪个数据库
            username: 'topos_rw', // 用户名
            password: 'Abc@123!', // 口令
            host: '192.168.18.204', // 主机名
            port: 3306 // 端口号，MySQL默认3306
        };
        break;
    case "prod":
        config = {
            database: 'subscribe', // 使用哪个数据库
            username: 'subscribe_rw', // 用户名
            password: 'Datum0916!', // 口令
            host: '127.0.0.1', // 主机名
            port: 3306 // 端口号，MySQL默认3306
        };
        break;
}

exports.sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    timezone: '+08:00'
});
