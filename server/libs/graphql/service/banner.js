import {BannerModel} from "../../../model/BannerModel"

/**
 *  banner.js
 *  Create By rehellinen
 *  Create On 2018/10/14 15:42
 */

export const getBanner = async () => {
  return await (new BannerModel()).getBanner()
}
