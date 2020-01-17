import axios from "axios";

import store from "@/store";
import { getToken } from "@/utils/auth";

const instance = axios.create({
  baseURL: "http://192.168.16.54:3000",
});

instance.interceptors.response.use(
  response => {
    /**请求内容 */
    // console.log(response);
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
  // console.log(config);
  return config;
});
/*这里是指每个请求 都会经过这里设置请求头 哪怕设置过了也依然会再次重新设置
而此次所做涉及到了 两个不同的token请求头 无论哪一个放在这里都会使另外一个出现bug*/
// instance.interceptors.request.use(config => {
//   console.log(config);

//   config.headers["authorization"] = "Bearer " + getToken(); //为请求头设置请求头
//   return config;
// });
export function get(url, params) {
  // console.log(url);
  return instance.get(url, params);
}

export function post(url, params) {
  console.log(params);
  return instance.post(url, params);
}
/**这里是默认导出 */
// console.log(instance);
export default instance;
