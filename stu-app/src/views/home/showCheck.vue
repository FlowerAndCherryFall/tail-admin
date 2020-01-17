<template>
  <div class="showmain">
    <van-nav-bar title="请假查看" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="leave" v-for="p in title" :key="p._id">
      <van-panel :title="p.name" :desc="p.price" :status="p.quantity=='1'?'同意':'不同意'">
        <div style="text-indent: 5vw;">内容： {{p.descriptions}}</div>
      </van-panel>
    </div>
  </div>
</template>
<script>
import { getmsg } from "@/api/user";
export default {
  data() {
    return {
      title: []
    };
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
        this.title = leave;
      });
    },
    onClickLeft() {
      this.$router.push("/");
    }
  }
};
</script>
