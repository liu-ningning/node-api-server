// 常用的工具函数
import crypto from 'crypto'
import { ObjectKey } from 'config'

export default {
  // 生成随机数
  random: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
  // 生成32位随机字符串
  randomString32: () => crypto.randomBytes(16).toString('hex'),
  // 返回千分位
  numberAddComma: (num: string | number) => {
    const str = `${num}`
    return str.split('').reverse().join('').replace(/(\d{3})/g, '$1,')
      .replace(/,$/, '')
      .split('')
      .reverse()
      .join('')
  },
  // 数组转JSON
  convertArray2JSON: (arr: any, key: string) => {
    const obj: ObjectKey = {}
    arr.forEach((item: any) => {
      if (obj[item[key]]) {
        obj[item[key]] = [].concat(obj[item[key]], item)
      } else {
        obj[item[key]] = item
      }
    })
    return obj
  },
  // 判断是否为JSON
  isJSON: (sameJSON: string) => {
    if (typeof sameJSON !== 'string') return false
    try {
      const obj = JSON.parse(sameJSON)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  },
  // compose函数
  compose: (...funcs: any[]) => {
    if (funcs.length === 0) {
      return function () { }
    }
    if (funcs.length === 1) {
      return funcs[0]
    }
    return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
  },
}