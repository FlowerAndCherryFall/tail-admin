<template>
  <div class="login">
    <img src="http://zua.edu.cn/images/07.jpg" alt />

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
export default {
  data() {
    return {
      username: "132456diao",
      password: "123456"
    };
  },

  methods: {
    // 登录
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
            this.$toast(usertoeken, res.message);
          } else {
            localStorage.setItem("user_token", res.token);
            /**这里因为请求是异步的所以应该吧跳转写到里面 */
            this.$router.push("myself");

            /**这里是vuex 的使用下面第一行是进行传参
             * 第二行是进行引用 可以在任何地方进行使用
              *this.$store.dispatch("token", res.token);
            this.$store.getters.token
              */
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
