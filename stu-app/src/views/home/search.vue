<template>
  <div class="main">
    <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell @click="clic" v-for="item in list" :key="item.latitude" :title="item.name" />
    </van-list>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onSearch() {
      let url =
        "http://cangdu.org:8001/v1/pois?city_id=2&keyword=" +
        this.value +
        "&type=search";
      axios({ url: url, type: "get" })
        .then(res => ((this.list = res.data), console.log(res)))
        .catch(err => console.log(err));
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < this.list.length; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.list.length) {
          this.finished = true;
        }
      }, 500);
    },
    onClickLeft() {
      this.$router.push("/");
    },
    clic(v) {
      // console.log(v.target.innerText);
      this.$router.push({
        name: "searchmsg",
        params: { id: v.target.innerText }
      });
    }
  }
};
</script>
<style  scoped>
.main {
  margin: 0;
}
</style>
