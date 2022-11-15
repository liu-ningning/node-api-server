import { Context, Next } from 'koa'
import KoaRouter from 'koa-router'
import { prefix } from '../../config'

export default class Router extends KoaRouter {
  moduleName: string

  constructor(moduleName: string) {
    super({ prefix })
    this.moduleName = moduleName ? `/${moduleName}` : ''
  }

  /**
   * GET请求
   *
   * @param {string} path '路由名称',
   * @param {function} path '方法',
   * @param {string} permission '接口权限', 可选
  */
  addGet(path: string, handler: Function, permission?: string) {
    this.addRouter('get', path, handler, permission)
  }

  /**
   * POST请求
   *
   * @param {string} path '路由名称',
   * @param {function} path '方法',
   * @param {string} permission '接口权限', 可选
  */
  addPost(path: string, handler: Function, permission?: string) {
    this.addRouter('post', path, handler, permission)
  }

  private addRouter(method: string, path: string, handler: Function, permission?: string) {
    const paths = `${this.moduleName}${path}`
    const middleware = async (ctx: Context, next: Next) => {
      if (!permission) await handler.call(this, ctx, next)
      else {
        if (!ctx.permission.includes(permission)) {
          ctx.send({
            errorCode: 401,
            message: '权限不足',
          })
          await next()
          return
        }
        await handler.call(this, ctx, next)
      }
    }
    this[method](paths, (middleware as any))
  }
}
