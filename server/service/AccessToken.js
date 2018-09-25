/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/9/25 19:23
 */
import axios from 'axios'
import config from '../../utils/config'
import {TokenModel} from '../model/TokenModel'

const {apiUrl, wechat} = config
const token = new TokenModel()

export class AccessToken {
  constructor () {
    this.appId = wechat.appId
    this.appSecret = wechat.appSecret
  }

  async get () {
    // 从数据库获取token
    const data = await token.getAccessToken()

    // 判断token是否有效
    let isValid = this.isValid()
    if (isValid) {
      return data.token
    } else {
      const data = await this.update()
      console.log(data)
    }
  }

  async update () {
    try {
      const data = await axios.get(apiUrl.accessToken, {
        params: {
          grant_type: 'client_credential',
          appid: this.appId,
          secret: this.appSecret
        }
      })

      const now = new Date().getTime()
      data.data.expires_in = now + (data.data.expires_in - 200) * 1000
      return data.data
    } catch (e) {
      console.log(e)
    }
  }

  /**
   * 判断token是否有效
   * @param data
   * @return {boolean}
   */
  isValid (data) {
    if (!data || !data.token || !data.expires_in) {
      return false
    }

    const expiresIn = data.expires_in
    const now = new Date().getTime()

    return now < expiresIn
  }
}

let test = new AccessToken()
test.get()
