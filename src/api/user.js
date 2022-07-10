import request from '@/utils/request'
import store from '@/store'
/**
 *
 * @returns 登录
 */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username, password
    }
  })
}

export const getMy = () => {
  return request({
    url: '/user',
    headers: {
      Authorization: store.state.user.token
    }
  })
}
