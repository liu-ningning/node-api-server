import { Context } from 'koa'
import moment from 'moment'

export default {
  test: async (ctx: Context) => {
    const { uid, name } = ctx

    ctx.send({
      data: {
        uid,
        name,
        id_name: 'node-api-server',
        timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
        NODE_ENV: process.env.NODE_ENV
      },
    })
  },
}
