import request, { get, post } from "@/utils/request";
// 这里是发起了一个请求
export function getList(page, per = 10) {
  return get("/api/v1/admin/users", {
    page,
    per,
  });
}

export function postLogin(params) {
  return post("/api/v1/auth/login", params);
}

export function Administrators() {
  let data = { userName: "admin", password: "admin@12138" };
  return post("/api/v1/auth/manager_login", data);
}

export function getInfo(token) {
  return request({
    url: "/api/v1/users/info",
    method: "get",
    headers: {
      authorization: "Bearer " + token, //设置请求头
    },
  });
}

export function putInfo(token, params) {
  // console.log(token);
  return request({
    url: "/api/v1/admin/users/5c6e953a224d199e15f12b9d",
    method: "put",
    params: params,
    headers: {
      authorization: "Bearer " + token, //设置请求头
    },
  });
}
