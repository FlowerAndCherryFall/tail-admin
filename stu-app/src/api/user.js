import request, { get, post } from "../utils/request";
import { getToken } from "../utils/auth";
import axios from "axios";
/**登录 */
export function postLogin(params) {
  return post("/api/v1/auth/login", params);
}
/**管理员登录 */
export function Administrators() {
  let data = { userName: "admin", password: "admin" };
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
export function putInfo(id, params) {
  console.log(params);
  return request({
    url: "/api/v1/admin/users/" + id,
    method: "put",
    data: params,
    headers: {
      authorization: "Bearer " + getToken(), //设置请求头
    },
  });
}

/**发送考勤 */
export function check(data) {
  return request({
    url: "/api/v1/admin/products",
    data: data,
    method: "post",
    headers: {
      authorization: "Bearer " + getToken(), //设置请求头
    },
  });
}
/**获取信息 */
export function getmsg() {
  return request({
    url: "/api/v1/products",
    method: "get",
    headers: {
      authorization: "Bearer " + getToken(), //设置请求头
    },
  });
}
