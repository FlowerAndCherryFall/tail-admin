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
import { getList } from "@/api/login";
export default {
  data() {
    return {
      username: "admin",
      password: "admin@12138"
    };
  },
  methods: {
    onClickButtonSubmit() {
      if (this.username == "" || this.password == "") {
        this.$toast("密码或账号为空");
      } else {
        getList({
          userName: this.username,
          password: this.password
        }).then(res => {
          console.log(res);
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
