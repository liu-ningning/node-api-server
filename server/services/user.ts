export interface UserService {
  userInfo(uid: number): Promise<any>
}

export const userService: UserService = {
  async userInfo(uid) {
    return 'ok'
  },
}
