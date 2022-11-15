import { Context, Next } from 'koa'
import { ERROR_MESSAGE } from '../utils/constant-api'

declare module 'koa' {
  interface Context {
    send(options: ResponseData): void
  }
}

export interface ResponseData {
  [key: string]: any
  data?: any
  code?: number
  message?: string
  success?: boolean
  errorCode?: number
  extra?: string[]
}

export default async (ctx: Context, next: Next) => {
  ctx.send = (options: ResponseData) => {
    const { code = 200, message, data = {}, errorCode = 0, success = false, extra } = options
    const result = {
      data,
      errorCode,
      message: message || ERROR_MESSAGE[errorCode],
      extra,
    }
    if (success) Reflect.set(result, 'success', success)
    ctx.status = code
    ctx.body = result
  }
  await next()
}