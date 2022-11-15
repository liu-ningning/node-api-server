// errorCode
export enum ERROR_CODE {
  REQUEST_PARAMS_PARSE_ERROR = -1,
  DEFAULT = 0,
  WAITING_LOGIN = 100,
  TOKEN_INVAILD = 401,
  GET_DATA_ERROR = 406,
  SERVER_ERROR = 500,
  LOGIN_SUCCESS = 1000,
  TOKEN_NOT_EXSITS = 1001,
  UID_NOT_EXISTS,
  USER_NOT_ADMIN,
  PHONE_INVAILD,
  SMSCODE_SEND_FAIL,
  SMSCODE_SEND_SUCCESS,
}

export enum ERROR_MESSAGE {
  '请求参数解析失败' = -1,
  '成功' = 0,
  '等待登录授权' = 100,
  'token非法或校验失败'= 401,
  '获取数据异常'= 406,
  '服务器错误，请联系管理员处理' = 500,
  '登录成功' = 1000,
  '二维码验证异常，请刷新重试' = 1001,
  '用户不存在',
  '当前用户没有权限',
  '当前手机号未注册',
  '发送验证码失败',
  '发送验证码成功'
}