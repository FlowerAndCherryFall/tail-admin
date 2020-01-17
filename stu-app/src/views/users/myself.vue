
<template>
  <div class="main">
    <div class="message" @click="updatamsg">
      <van-image round width="30vw" height="30vw" :src="a" />
      <div class="userShow">
        <span>{{msg}}</span>
        <p>{{desc}}</p>
      </div>
    </div>
    <van-cell-group>
      <van-cell :title="timsg" label />
      <van-cell :title="a ? '退出' : '登录'" @click="loOrOut" label />
    </van-cell-group>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { getInfo } from "@/api/user";
export default {
  data() {
    return {
      msg: "热心市民金先生",
      desc: "无",
      a: "",
      avater: "",
      timsg: "设置"
    };
  },
  created() {
    this.judgeLogin();
  },
  methods: {
    judgeLogin() {
      this.a = localStorage.getItem("user_token");
      // console.log(this.a);
      if (this.a) {
        getInfo(this.a).then(res => {
          // console.log(res);
          // console.log(this.a);
          this.msg = res.nickName;
          let imgur = res.avatar;

          if (imgur.indexOf("data:image") > -1) {
            this.a = res.avatar;
          } else {
            this.a = "http://192.168.16.54:3000" + res.avatar;
          }
        });
      }
    },
    loOrOut() {
      if (this.a) {
        Dialog.confirm({
          title: "退出",
          message: "真的要忍心退出吗"
        })
          .then(() => {
            // on confirm
            localStorage.removeItem("user_token");
            this.a = "";
          })
          .catch(() => {
            // on cancel 取消
          });
      } else {
        this.$router.push("login");
      }
    },
    updatamsg() {
      let usertoken = localStorage.getItem("user_token");
      if (usertoken) {
        this.$router.push({
          name: "updataUser"
        });
      } else {
        this.timsg = "没有登陆😂";
      }
    }
  }
};
</script>
<style  scoped>
.main {
  overflow-x: hidden;
}
.message {
  width: 100%;
  padding-left: 30px;
  margin: 0 0 20px 0;
}
.userShow {
  display: inline-block;
  vertical-align: top;
  padding: 20px 0 0 20px;
}
</style>
