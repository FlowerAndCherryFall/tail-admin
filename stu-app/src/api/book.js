import { get } from "@/utils/request";
// console.log(get);
export function getList(page, per = 10) {
  return get("http://localhost:3009/api/v1/books", {
    page,
    per,
  });
}
