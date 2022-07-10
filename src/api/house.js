import request from '@/utils/request'

// 根据条件查询房屋
export const getHouses = (cityId) => {
  return request({
    url: '/houses',
    params: {
      cityId
    }
  })
}

export const getCondition = (id) => {
  return request({
    url: '/houses/condition/',
    params: {
      id
    }
  })
}
