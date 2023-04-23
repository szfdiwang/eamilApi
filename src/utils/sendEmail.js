const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    // host: 'smtp.163.com',
    service: "qq", //邮箱类型 例如service:'163'
    secure: true, //是否使用安全连接，对https协议的
    // port: 465, //qq邮件服务所占用的端口
    auth: {
        user: "info@topos.one",//开启SMTP的邮箱，发件人
        pass: "wppyyyanxlqbbjha"// qq授权码
    }
})

exports.sendEmail = (to, subject, html) => {
    let options = {
        from: 'info@topos.one', //发送方
        to,//"xxx@qq.com",//接收方
        subject,//'111111111111',//邮件主题
        html,//'<h1>您好</h1>',//html模板
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(options, (err, info) => {
            if (err) {
                reject(err)
            } else {
                resolve(info)
            }
        })
    }).catch(e => {
        throw e
    })
}