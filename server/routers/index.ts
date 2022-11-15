import Router from '../libs/proxy-router'

import {
  Test,
  Common,
} from '../controllers/index'

const router = new Router('')

router.addGet('/test', Test.test)
// 登录
router.addGet('/login', Common.login)

export { router }
