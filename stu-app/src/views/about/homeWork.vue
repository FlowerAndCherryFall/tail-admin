<template>
  <div class="work">
    <div class="workcontent" v-for="p in list" :key="p._id">
      <van-panel :title="p.name" :desc="p.price">
        <div>{{p.descriptions}}</div>
      </van-panel>
    </div>
    <van-pagination v-model="currentPage" />
  </div>
</template>

<script>
import { homework } from "@/api/user";
import axios from "axios";
export default {
  data() {
    return {
      currentPage: 1,
      list: []
    };
  },
  created() {
    this.home();
  },
  methods: {
    home() {
      axios.get("http://192.168.16.54:3000/api/v1/products").then(res => {
        this.currentPage = res.data.pages;

        let work = res.data.products.filter(v => v.price == "作业");
        console.log(work);
        this.list = work;
      });
    }
  }
};
</script>
<style  scoped>
.workcontent {
  width: 100%;
  padding: 10px;
}
</style>
