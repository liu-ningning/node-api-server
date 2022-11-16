# node-api-server

基于 nodeJs 搭建的 API 服务

# 介绍

基于 `nodejs` 搭建的 API 服务

##  版本依赖

- node -v12.18.3
- npm -v6.14.6
- koa -v2.13.0
- koa-router -v9.1.0
- typescript -v3.0.1

## 项目地址

`node-api-server` <https://github.com/liu-ningning/node-api-server.git>

## 项目目录

| 路径              | 描述                                            | 详情 |
| ----------------- | ----------------------------------------------- | ---- |
| docs              | 说明以及开发文档                                | -    |
| logs              | 开发 log 日志(本地开发环境)                     | -    |
| pm2               | pm2 启动文件                                    | -    |
| server            | 服务端 ts 代码                                  | -    |
| .eslintrc         | ESLint                                          | -    |
| .gitignore        | Git                                             | -    |
| .npmrc            | 企业私有包配置                                  | -    |
| package-lock.json | 请保持它的版本与 package.json 一致(npm ci 使用) | -    |
| package.json      | Package                                         | -    |
| tsconfig.json     | TypeScript 项配置文件                           | -    |

## 分支说明

- `dev` ------ 用于上线测试环境
- `master` -----  用于上线正式环境

## 开发环境

开发环境需要依赖 ESlint,确认使用支持的编辑器 ，如 vscode， ⚠️ 开启 ESlint 检查

## 开发流程

### 项目

- `host`: 127.0.0.1
- `port`: 5208

### 启动

```bash
  git clone https://github.com/liu-ningning/node-api-server.git
  cd node-api-server
  npm install
  npm run start
```

### api 请求

项目启动后，先获取 token: `http://127.0.0.1:5208/node-api/login`

在每次的请求中，头信息携带 Authorization = token，便可成功请求 api

### pm2 管理项目

项目部署前，需先 build 编译后启动

```bash
  npm run build:ts
```

```
  线上启动: pm2 start /pm2/development.json
  线上启动: pm2 start /pm2/production.json
```
