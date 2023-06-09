/** 
 * 数据接口渲染
 * @param ctx 上下文对象
 * @param data 数据
 * @param code 状态码
 * @param message 描述
 * @param stackMessage 服务端错误堆栈
 */
const renderData = function (ctx, data = null, code = 0, message = "", stackMessage = "") {
    switch (code) {
        case -1:
            message = message || "参数不正确";
            break;
        case 0:
            message = message || "成功";
            break;
    }
    ctx.body = {
        data,
        code,
        message,
    }
}
module.exports = { renderData }