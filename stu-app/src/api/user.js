import request, { get } from "@/utils/request";
// 这里是发起了一个请求
export function getList(page, per = 10) {
  return get("/api/v1/admin/users", {
    page,
    per,
  });
}

export function login(data) {
  return request({
    url: "/api/v1/auth/manager_login",
    // 账号密码都是admin
    method: "post",
    data,
  });
}

export function getInfo(token) {
  return request({
    url: "/api/v1/users/manager_info",
    method: "get",
    // params: { token }
    headers: {
      authorization: "Bearer " + token, //设置请求头
    },
  });
}

export function logout() {
  return request({
    url: "/user/logout",
    method: "post",
  });
}
