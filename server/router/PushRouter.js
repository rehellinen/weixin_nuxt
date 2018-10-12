import {controller, get} from "../libs/decorator/Router"
import {Push} from "../controller/Push"

/**
 * 负责微信公众号相关
 */
@controller('push')
export class PushRouter {
  @get('')
  async openPush (ctx) {
    await Push.openPush(ctx)
  }
}