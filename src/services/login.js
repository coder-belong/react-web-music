import request from "./request";

// 登录接口
export function login() {
  return request({
    url: '/login/cellphone',
    params: {
      phone:'18850454419',
      password: 'avj587'
    }
  })
}
