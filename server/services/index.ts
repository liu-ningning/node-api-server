import { commonService, CommonService } from './common'
import { userService, UserService } from './user'

// 注入到ctx中，方便获取
declare module 'koa' {
  interface Context {
    userService: UserService
    commonService: CommonService
  }
}

export interface Services {
  userService: UserService
  commonService: CommonService
}

export const services: Services = {
  userService,
  commonService,
}
