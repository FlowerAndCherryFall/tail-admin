<template>
  <div class="home">
    <div class="header" @click="jump">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <div class="main">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="http://www.huel.edu.cn/__local/E/86/B2/486E8EFAFBC96FB28325609430C_4B022088_3F4A4.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://www.huel.edu.cn/__local/3/75/0F/AB742CA1F3D6213E432F2C91E82_0A7E43C3_3D111.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://www.huel.edu.cn/__local/3/9A/14/1285B80E76DCC39976E7455F4DB_81BC6D8D_2FFDF.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://www.huel.edu.cn/_mediafile/huel/2019/02/22/2cqm7bnwdu.jpg" alt />
        </van-swipe-item>
      </van-swipe>

      <!-- 列表 -->
      <van-grid :column-num="5">
        <van-grid-item to="/check" icon="fire" text="请假" />
        <van-grid-item to="/homeWork" icon="coupon-o" text="作业" />
        <van-grid-item icon="star-o" to="/showCheck" text="请假查看" />
        <van-grid-item icon="user-o" text="文字" />
        <van-grid-item icon="flower-o" text="文字" />
        <van-grid-item icon="flower-o" text="文字" />
        <van-grid-item icon="user-o" text="文字" />
        <van-grid-item icon="user-o" text="文字" />
        <van-grid-item icon="star-o" text="文字" />
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
import { getList } from "../api/book";
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

    fetchData(page = this.count) {
      this.loading = true;
      getList(page).then(res => {
        this.list = res.books;
      }),
        /**管理员登录 */
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
</script>
<style  scoped>
img {
  width: 100%;
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

