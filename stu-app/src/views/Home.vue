<template>
  <div class="home">
    <div class="header" @click="jump">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <div class="main">
      <!-- 这里是刷新的开始区间 刷新还有bug-->
      <van-pull-refresh @refresh="onRefresh" v-model="isLoading"></van-pull-refresh>
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../public/img/8.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../public/img/011.jpg" alt />
        </van-swipe-item>
      </van-swipe>

      <!-- 列表 -->
      <van-grid :column-num="5">
        <van-grid-item to="/check" icon="fire" text="请假" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>

      <van-grid :column-num="2">
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>

      <!-- 书籍 -->
      <div class="book" v-for="p in list" :key="p._id">
        <van-card
          :desc="p.descriptions"
          :title="p.title"
          :price="p.author"
          currency="作者："
          :thumb="p.coverImg?p.coverImg:defimg"
          style="margin-top:20px"
        >
          <div slot="tags">
            <van-tag plain type="danger">{{p.category.name}}</van-tag>
            <van-tag plain type="danger">玄幻</van-tag>
          </div>
        </van-card>
      </div>
      <!-- 这里是刷新的结束区间 -->
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/book";
import { Administrators } from "@/api/user";
import request from "@/utils/request";
import { setToken } from "@/utils/auth";
import { type } from "os";
export default {
  name: "home",
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false,
      defimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63iAuCesBtFQA5pfxobqjNj7i79eGSNH2dVgWxI8Ka_IGDhvQ&s",
      currentPage: 1,
      count: 0,
      isLoading: false
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    jump() {
      this.$router.push("search");
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 500);
    },
    fetchData(page = this.count) {
      this.loading = true;
      getList(page).then(res => {
        this.list = res.books;
      }),
        Administrators()
          .then(res => {
            // console.log(res);
            this.admsg = res.token;
            setToken(res.token);
          })
          .catch(err => console.log(err));
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;

        getList(this.count).then(res => {
          // console.log(res);
          this.list = res.books;
        });
      }, 1000);
    }
  }
};

/**管理员信息
 * request({
              url: "/api/v1/users/manager_info",
              method: "get",
              async: false,
              params: "",
              headers: {
                authorization: "Bearer " + this.admsg //设置请求头
              }
            })
              .then(res => console.log(res))
              .catch(err => console.log(err)); */
</script>
<style  scoped>
img {
  width: 100%;
  height: 60vw;
}
.header {
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 43px;
}
.main {
  margin-top: 60px;
}
</style>

