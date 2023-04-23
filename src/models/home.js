
const { sequelize } = require("../config/db")
const Sequelize = require('sequelize');
const moment = require('moment');
moment.locale('zh-cn');

const useObj = {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
            isEmail: true,
            notNull: true
        }
    },
    create_time: {
        type: Sequelize.DATE,
        get() { return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss'); }
    },
};


const contactObj = {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
            isEmail: true,
            notNull: true
        }
    },
    name: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    companyName: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    create_time: {
        type: Sequelize.DATE,
        get() { return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss'); }
    },
};


const userInfo = sequelize.define('subscribeList', useObj, {
    // freezeTableName: true, // 模型名和数据库中表名一样的话
    timestamps: false
});

const contactInfo = sequelize.define('contactList', contactObj, {
    // freezeTableName: true, // 模型名和数据库中表名一样的话
    timestamps: false
});

// userInfo.sync({ alter: false })
/**
 * 插入一条用户邮箱
 */
const setUserEmail = async (params) => {
    await userInfo.create(params);
}

const setUserContact = async (params) => {
    await contactInfo.create(params);
}


module.exports = {
    setUserEmail,
    setUserContact
}