export type MysqlConfig = {
  key: string
  host: string
  port: string
  username: string
  password: string
  database: string
  modelPath: string
}

export type RedisConfig = {
  key: string
  host: string
  port: string
}

export type APIConfig = {
  host: string
}

export type ConfigItem = MysqlConfig | RedisConfig | APIConfig | string | string[]

export type ConfigMap = {
  [key: string]: ConfigItem
}

export type ObjectKey = {
  [index: string]: any
}
