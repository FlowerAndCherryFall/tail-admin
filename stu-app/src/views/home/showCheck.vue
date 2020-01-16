<template>
  <div class="showmain">
    <van-nav-bar title="请假查看" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-panel title="标题" desc="描述信息" status="状态">
      <div>内容</div>
    </van-panel>
  </div>
</template>
<script>
import { getmsg } from "@/api/user";
export default {
  data() {
    return {};
  },
  created() {
    this.askMsg();
  },
  methods: {
    askMsg() {
      getmsg().then(res => {
        // console.log(res.products);
        let leave = res.products.filter(v => v.price == "请假");
        console.log(leave);
      });
    },
    onClickLeft() {
      this.$router.push("/");
    }
  }
};
</script>
