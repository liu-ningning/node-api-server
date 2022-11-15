/**
 * 项目环境配置
 */
import path from 'path'

// 项目名
const app = 'node-api-server'

// 开发、测试、正式环境
const Env = process.env.NODE_ENV
const isLocal = Env === 'local'
const isDev = Env === 'development'
const isPro = Env === 'production'

// 在本地使用线上数据库
const dev = process.env.NODE_DEV
const isLocalPro = dev === 'localPro'

// 路由前缀
const prefix = '/node-api'

// 端口号
const port = 5208
// 日志路径
const logPath = isLocal ? path.resolve(__dirname, '../../logs') : `/data/logs/${app}/`
// 项目编译后路径
const distPath = path.resolve(__dirname, '../../dist')
// routersPath 路径
const routersPath = path.resolve(__dirname, '../routers')
// middlewares 路径
const middlewaresPath = path.resolve(__dirname, '../middlewares')
// models 路径
const modelsPath = path.resolve(__dirname, '../models')
// utils 路径
const utilsPath = path.resolve(__dirname, '../utils')
// 静态资源路径
const staticPath = path.resolve(__dirname, '../../public')

export {
  Env,
  isPro,
  isDev,
  isLocal,
  isLocalPro,
  port,
  logPath,
  distPath,
  routersPath,
  middlewaresPath,
  modelsPath,
  utilsPath,
  staticPath,
  prefix,
}

