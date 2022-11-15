import { getToken as getTokenFunc } from '../utils'

export interface CommonService {
  getToken(): Promise<String>
}

export const commonService: CommonService = {
  async getToken() {
    return await getTokenFunc({ uid: 123456789, name: '好一个小可爱啊' }, '120h')
  },
}
