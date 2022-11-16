import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import helmet from 'koa-helmet'
import koaBody from 'koa-body'
import serve from 'koa-static'
import { createServer } from 'http'
import { baseLogger } from 'koa-base-logger'
import {
  TokenAgentMiddleware,
  CtxSendDataMiddleware,
  ErrorCapturerMiddleware,
  servicesInjectMiddleware,
} from './middlewares'

import handleRouter from './system/control/handle-router'
import { staticPath, port, isLocal, isDev } from './config'

const app = new Koa()

const httpServer = createServer(app.callback())

// 本地开发/测试环境跨域
if (isLocal || isDev) {
  app.use(cors({
    allowMethods: ['POST', 'GET'],
    allowHeaders: ['authorization', 'Content-Type'],
    credentials: true,
  }))
}
// logger
app.use(baseLogger({
  appName: 'node-api-server',
  fileName: 'apiAdmin',
}))

app.use(CtxSendDataMiddleware)
app.use(ErrorCapturerMiddleware)
app.use(TokenAgentMiddleware)
app.use(servicesInjectMiddleware)

app.use(koaBody({ multipart: true }))

// body / files
app.use(bodyParser())

// static public
app.use(serve(staticPath))

// router
handleRouter(app)

// compress
app.use(compress({
  threshold: 2048,
}))

// helmet
app.use(helmet())

// error-handling
process.on('uncaughtException', (err: any, origin: any) => {
  console.error(`${process.stderr.fd}, Caught exception: ${err}, Exception origin: ${origin}`)
})

process.on('unhandledRejection', (reason: any, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

app.on('error', err => {
  console.error(err)
})

httpServer.listen(port, () => {
  console.log(`🌏 Server running on http://127.0.0.1:${port}`)
})

