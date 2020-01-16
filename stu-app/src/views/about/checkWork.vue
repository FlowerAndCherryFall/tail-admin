<template>
  <div class="check">
    <van-nav-bar :title="name" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="img">
      <img src="../../../public/img/8.jpg" alt />
    </div>
    <van-button @click="commit" style="width:100%; margin-top:20px;" type="primary">签到</van-button>
  </div>
</template>
<script>
import { check, getInfo } from "@/api/user";
import axios from "axios";
import { getToken } from "../../utils/auth";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        descriptions: "",
        quantity: 0,
        price: 0,
        coverImg: ""
      }
    };
  },
  created() {
    this.star();
  },
  methods: {
    star() {
      this.name = this.$route.params.id;
      getInfo(localStorage.getItem("user_token")).then(
        res => (this.ruleForm.name = res.nickName)
      );
    },
    onClickLeft() {
      history.back();
    },
    commit() {
      let a = new Date();
      let timer = a.getHours() + ":" + a.getMinutes();
      this.ruleForm.quantity = timer;
      this.ruleForm.descriptions = this.$route.params.id;
      this.ruleForm.price = "签到";
      check(this.ruleForm).then(res => console.log(res));
    }
  }
};

/** 标准请求
 * axios({
         url: "http://192.168.16.54:3000/api/v1/admin/products",
         method: "post",
        data: this.ruleForm,
         headers: {
           authorization: "Bearer " + getToken()
         }
       }).then(res => {
         console.log(res);
       });
 */
</script>

<style  scoped>
.img img {
  width: 100%;
}
</style>
