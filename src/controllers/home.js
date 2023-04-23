const home = require("../models/home")
const { renderData } = require("../config/render")
const { handleError } = require("../config/errorHandle")
const { sendEmail } = require("../utils/sendEmail")
const { emailTemp } = require("../config/emailTemp")
const serviceEmail = require("../config/config").serviceEmail
/**
 * 插入email
 */
exports.setUserEmail = async (ctx) => {
    const data = ctx.request.body;
    try {
        const result = await home.setUserEmail({
            email: data.email,
            create_time: Date.now()
        })
        const temp = emailTemp('subscribe', data)
        await sendEmail(serviceEmail, '有用户通过TOPOS官网希望订阅我们的咨询', temp)  //to, subject, html

        // @ts-ignore
        renderData(ctx, result)
    } catch (error) {
        handleError(ctx, error)
    }
}

exports.setUserContact = async (ctx) => {
    const data = ctx.request.body;
    try {
        const result = await home.setUserContact({
            email: data.email,
            name: data.name,
            companyName: data.companyName,
            create_time: Date.now()
        })
        const temp = emailTemp('contact', data)
        await sendEmail(serviceEmail, '有用户通过TOPOS官网希望与我们联系', temp)
        // @ts-ignore
        renderData(ctx, result)
    } catch (error) {
        handleError(ctx, error)
    }
}
