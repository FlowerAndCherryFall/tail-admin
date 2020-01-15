<template>
  <div class="updata">
    <h1 style="text-align:center;text-shadow:1px 1px red; ">修改</h1>
    <van-field v-model="userName" label="昵称" />
    <van-field v-model="nickName" label="用户名" />
    <van-uploader v-model="fileList" multiple :max-count="1" />
    <p style="text-align:center;">
      <van-button type="primary" @click="pull">主要按钮</van-button>
    </p>
  </div>
</template>

<script>
import { getInfo, putInfo } from "@/api/user";
import request, { get, post } from "@/utils/request";

import axios from "axios";
export default {
  data() {
    return {
      userName: "",
      fileList: [],
      nickName: "",
      admsg: "",
      tiimg: ""
    };
  },
  created() {
    this.getmsg();
  },
  methods: {
    getmsg() {
      this.usertoken = this.$store.getters.token;
      getInfo(this.usertoken).then(res => {
        this.userName = res.userName;
        this.nickName = res.nickName;
        this.tiimg = "http://localhost:3009" + res.avatar;
        let as = this.tiimg;
        // console.log(as);
        this.fileList.push({ isImage: true, as });
        // console.log(this.fileList);
      });
    },
    pull() {
      let params = {
        nickName: this.nickName,
        userName: this.userName,
        avatar: this.tiimg
      };
      axios({
        url:
          "http://localhost:3009/api/v1/admin/users/5c6e953a224d199e15f12b9d",
        method: "put",
        params: params,
        headers: {
          authorization: "Bearer " + this.$store.getters.adtoken //设置请求头
        }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
};
/**
 * putInfo({
        nickName: this.nickName,
        userName: this.userName,
        avatar: this.tiimg
      })
 */
</script>
