
const { renderData } = require("../config/render")
exports.handleError = (ctx, error) => {
    console.log('error=============================>', error);
    if (error.name === 'SequelizeValidationError') {
        renderData(ctx, null, 500, `格式校验失败: ${error.errors[ 0 ].message}`)
    } else if (error.name === 'SequelizeUniqueConstraintError') {
        renderData(ctx, null, 500, '您输入的邮箱已订阅')
    } else {
        renderData(ctx, null, 500, '服务器内部错误')
    }
}