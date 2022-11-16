import { Context } from 'koa'
import { getJWTPayload, scheme } from '../utils'
import tools from '../utils/tools'
import { prefix } from '../config'

declare module 'koa' {
  interface Context {
    adminId: number | undefined
    permission: string[]
  }
}
/**
 * 校验白名单
*/
const expectList = [
  '/node-api/login',
]

const isExpectRouter = (routerPath: string) => {
  const prefixStr = `^${prefix}`
  const reg = new RegExp(prefixStr, 'i')
  return !reg.test(routerPath) || expectList.includes(routerPath)
}

// 获取用户权限列表
const getUserPermission: (uid: number) => Promise<string[]> = async (uid: number) => {
  return []
}

// token解析，返回解析后的uid或null
const checkToken: (ctx: Context) => any | null = ctx => {
  const { authorization } = ctx.headers

  const SCHEME_REG = new RegExp(`^${scheme}`, 'i')

  if (!authorization || !SCHEME_REG.test(authorization)) return null
  try {
    const jwtDecodeObj = getJWTPayload(authorization)
    if (typeof jwtDecodeObj === 'string') return null
    const { uid, name } = jwtDecodeObj
    if (!uid) return null
    return { uid, name }
  } catch (err) {
    ctx.logger.error(err, { msg: `JWT解析失败` })
    return null
  }
}
interface CheckUserApi {
  uid: number
  name: string
}
const checkUser: (obj: CheckUserApi) => Promise<any | null> = async obj => {
  if (!obj?.uid) return { uid: null, msg: '账号异常，请重新登录' }
  return { ...obj, msg: 'ok' }
}

const check = tools.compose(checkUser, checkToken)

export default async (ctx: Context, next: any) => {
  console.log('👉[api-path]:', ctx.path)
  if (isExpectRouter(ctx.path)) {
    await next()
    return
  }
  try {
    const { uid, name, msg } = await check(ctx)
    if (!uid) {
      ctx.send({
        code: 401,
        errorCode: 401,
        message: msg,
      })
      return
    }
    // 获取权限
    const permission = await getUserPermission(uid)
    ctx.uid = uid
    ctx.name = name
    ctx.permission = permission
    await next()
  } catch (err) {
    ctx.logger.error(err, { msg: 'token校验中间件发生异常错误' })
  }
}