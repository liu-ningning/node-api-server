import { Context } from 'koa'

export default {
  // 登录获取token
  login: async (ctx: Context) => {
    const { getToken } = ctx.commonService
    ctx.send({
      data: await getToken(),
    })
  },
}
