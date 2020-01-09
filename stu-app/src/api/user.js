import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/v1/auth/manager_login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/v1/users/manager_info',
    method: 'get',
    // params: {
    //   token
    // }
    headers: {
      authorization: 'Bearer ' + token // 设置请求头
    }

  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
