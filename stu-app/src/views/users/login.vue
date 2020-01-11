<template>
  <div class="login">
    <img src="../../../public/img/mai3.jpg" alt />

    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('用户名必须是学号')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      <div class="pd15">
        <van-button type="primary" size="large" @click="onClickButtonSubmit">登录</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { postLogin } from "@/api/user";
import { setToken } from "@/utils/auth";
export default {
  data() {
    return {
      username: "1324567diao",
      password: "123456"
    };
  },

  methods: {
    onClickButtonSubmit() {
      if (this.username == "" || this.password == "") {
        this.$toast("密码或账号为空");
      } else {
        postLogin({
          userName: this.username,
          password: this.password
        }).then(res => {
          console.log(res);
          if (res.code == "error") {
            this.$toast(res.message);
          } else {
            setToken(res.token);
            /**这里因为请求是异步的所以应该吧跳转写到里面 */
            this.$router.push("myself");
            this.$store.dispatch("token", res.token);
          }
        });
      }
    }
  }
};
</script>

<style  scoped>
img {
  width: 100%;
}
</style>
