import { get } from "@/utils/request";
// console.log(get);
export function getList(params) {
  return get("http://localhost:3009/api/v1/auth/manager_login", params);
}
