import {controller, get} from "../libs/decorator/router"
import {Token} from "../controller/Token"

/**
 * Token令牌相关
 */
@controller('token')
export class TokenRouter {
  @get('')
  async getToken (ctx) {
    await Token.getToken(ctx)
  }

  @get('mp')
  async getMpToken (ctx) {
    await Token.getToken(ctx)
  }

  @get('check')
  async checkToken (ctx) {
    await Token.checkToken(ctx)
  }
}
