import axios from "axios";

import store from "@/store";
import { getToken } from "@/utils/auth";

const instance = axios.create({
  baseURL: "http://localhost:3009",
});

instance.interceptors.response.use(
  response => {
    /**请求内容 */
    console.log(response);
    const res = response.data;
    return res;
  },
  error => {
    /** 报错 */
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);
instance.interceptors.request.use(config => {
  if (store.getters.token) {
    // console.log(1);
    config.headers["authorization"] = "Bearer " + getToken(); //为请求头设置请求头
  }
  // console.log(config);
  return config;
});
export function get(url, params) {
  return instance.get(url, params);
}

export function post(url, params) {
  return instance.post(url, params);
}
/**这里是默认导出 */
// console.log(instance);
export default instance;
