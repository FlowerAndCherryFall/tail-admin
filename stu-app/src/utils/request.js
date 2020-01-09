import axios from "axios";

import store from "@/store";
import { getToken } from "@/utils/auth";
const instance = axios.create({});

export function get(url, params) {
  return instance.get(url, params);
}
