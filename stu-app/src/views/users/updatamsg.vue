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

export default {
  data() {
    return {
      userName: "",
      fileList: [],
      nickName: "",
      admsg: ""
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
        let as = "http://localhost:3009" + res.avatar;
        this.fileList.push({ as, isImage: true });
        // console.log(this.fileList);
      });
    },
    pull() {
      let htoken = this.admsg;
      putInfo({
        nickName: this.nickName,
        userName: this.userName,
        avatar: this.fileList[0]
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
};
</script>
