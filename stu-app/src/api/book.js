import { get } from "@/utils/request";
// console.log(get);
/**获取书籍列表 */
export function getList(page, per = 5) {
  let params = { page: page, per: per, sort: 1, category: "武侠修真" };
  return get("http://192.168.16.3:3009/api/v1/books", params);
}
