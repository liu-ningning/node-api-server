import { Context, Next } from 'koa'
import { services } from '../services'

export default async (ctx: Context, next: Next) => {
  Object.keys(services).forEach((k, i) => {
    ctx[k] = Object.values(services)[i]
  })

  await next()
}