import request from '@/utils/request'

/**
 *获取城市列表数据
 * @returns
 */
export const getHotCityList = (level) => {
  return request({
    url: '/area/hot'
  })
}

/**
 *获取城市列表数据
 * @returns
 */
export const getCityList = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}
