<template>
  <div class="home">
    <div class="header">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="main">
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
        <van-grid-item icon="photo-o" text="文字" />
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
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/book";
export default {
  name: "home",
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false,
      defimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63iAuCesBtFQA5pfxobqjNj7i79eGSNH2dVgWxI8Ka_IGDhvQ&s"
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    onSearch() {},
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
    fetchData(page = 1) {
      this.loading = true;
      getList(page).then(res => {
        this.list = res.data.books;
      });
    }
  }
};
</script>
<style  scoped>
img {
  width: 100%;
  height: 250px;
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
