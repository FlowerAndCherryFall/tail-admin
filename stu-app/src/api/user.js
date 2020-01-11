import request, { get, post } from "@/utils/request";
import { getToken } from "@/utils/auth";
/**登录 */
export function postLogin(params) {
  return post("/api/v1/auth/login", params);
}
/**管理员登录 */
export function Administrators() {
  let data = { userName: "admin", password: "admin@12138" };
  return post("/api/v1/auth/manager_login", data);
}
/**获取用户信息 */
export function getInfo() {
  return request({
    url: "/api/v1/users/info",
    method: "get",
    headers: {
      authorization: "Bearer " + localStorage.getItem("user_token"), //设置请求头
    },
  });
}
/**修改用户信息 */
export function putInfo(params) {
  return request({
    url: "/api/v1/admin/users/5c6e953a224d199e15f12b9d",
    method: "put",
    params: params,
    headers: {
      authorization: "Bearer " + getToken(), //设置请求头
    },
  });
}

/**获取课程例表 */
export function taskTable(params) {
  return request({
    url: "/api/v1/admin/products",
    method: "get",
    params: params,
    headers: {
      authorization: "Bearer " + getToken(), //设置请求头
    },
  });
}
/**获取学期例表 */
export function Semester(params) {
  return request({
    url: "/api/v1/admin/product_categories",
    method: "get",
    params: params,
    headers: {
      authorization: "Bearer " + getToken(), //设置请求头
    },
  });
}
