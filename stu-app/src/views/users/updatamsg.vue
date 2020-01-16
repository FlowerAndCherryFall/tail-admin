<template>
  <div class="updata">
    <h1 style="text-align:center;text-shadow:1px 1px red; ">修改🧐</h1>
    <van-field v-model="userName" label="昵称" />
    <van-field v-model="nickName" label="用户名" />
    <van-uploader v-model="fileList" :after-read="afterRead" multiple :max-count="1" />
    <p style="text-align:center;">
      <van-button type="primary" @click="pull">修改👌</van-button>
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
      tiimg: "",
      id: ""
    };
  },
  created() {
    this.getmsg();
  },
  methods: {
    /**图片上传 */
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file.content);
      this.tiimg = file.content;
    },
    /**加载时获取 展示数据 */
    getmsg() {
      this.usertoken = localStorage.getItem("user_token");
      // console.log(this.usertoken);
      getInfo(this.usertoken).then(res => {
        this.id = res._id;
        this.userName = res.userName;
        this.nickName = res.nickName;
        this.tiimg = res.avatar;
        let as = this.tiimg;
        // console.log(as);
        this.fileList.push({ isImage: true, as });
        // console.log(this.fileList);
      });
    },
    /** 修改数据 */
    pull() {
      console.log(this.fileList[0]);
      let params = {
        nickName: this.nickName,
        userName: this.userName,
        avatar: this.tiimg
      };
      // console.log(params);
      putInfo(this.id, params).then(res => history.back());
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
