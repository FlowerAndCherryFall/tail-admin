import axios from "axios";
import request from "@/utils/request";
export function search(a) {
  let url =
    "http://cangdu.org:8001/v1/pois?city_id=1&keyword=" + a + "&type=search";
  axios.get(url);
}
