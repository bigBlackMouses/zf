import request from '@/utils/request'

export const getHome = () => {
  return request({
    url: '/home/swiper'

  })
}
export const getgroups = area => {
  return request({
    url: '/home/groups',
    params: {
      area
    }
  })
}
