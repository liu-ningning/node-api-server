import { Context, Next } from 'koa'
import { isLocal } from '../config'
import { ERROR_CODE } from '../utils/constant-api'

export default async (ctx: Context, next: Next) => {
  try {
    await next()
  } catch (err) {
    if (isLocal) {
      console.log(err)
    }
    let { message, name } = (err as Error)
    console.log(message)
    let code = 500
    if (name === 'JsonWebTokenError' || name === 'TokenExpiredError') {
      code = 401
      message = '登录超时，请重新登录'
    }
    if (!isLocal) ctx.logger.error({ label: 'no actively caught errors', code: err.code, msg: err.message, name })
    ctx.send({
      code,
      data: {},
      errorCode: ERROR_CODE.SERVER_ERROR,
      message,
    })
  }
}