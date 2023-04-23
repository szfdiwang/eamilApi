
const { setUserEmail, setUserContact } = require("../controllers/home")
const router = new (require('koa-router'))()

router.get('/', async (ctx) => {
    ctx.body = 'hello koa!'
})

router.post('/api/setUserEmail', setUserEmail)
router.post('/api/setUserContact', setUserContact)

//返回注册路由
module.exports = router