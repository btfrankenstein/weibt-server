const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)

/**
 * 判断token是否可用
 */
module.exports = function () {
  return async function (ctx, next) {
    try {
      const token = ctx.header.token  // 获取jwt
      if(token) {
        let payload
        try {
          payload = await verify(token, 'jwtdemo')  // 解密payload，获取用户名和ID
          ctx.user = {
            email: payload.email,
            userId: payload.userId,
          }
        } catch (err) {
          console.log('token verify fail: ', err)
        }
      }

      console.log(`token: ${token}`)

      await next()
    } catch (err) {
      console.log(err);
      if (err.status === 401) {
        ctx.body = {
          code: -1,
          message: '认证失败'
        }
      } else {
        err.status = 404
        ctx.body = '404'
        console.log('不服就是怼：', err)
      }
    }
  }
}