<template>
  <div>
    <van-nav-bar :title="name" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field label="名称" :value="name" readonly />
      <van-field label="地址" :value="address" readonly />
      <van-field label="经纬度" :value="latitude" readonly />
    </van-cell-group>
    <p>
      <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2523235567,4009336127&fm=26&gp=0.jpg"
        alt
      />
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "",
      name: "",
      address: "",
      latitude: ""
    };
  },
  created() {
    this.semsg();
  },
  methods: {
    semsg() {
      this.msg = this.$route.params.id;
      let url =
        "http://cangdu.org:8001/v1/pois?city_id=2&keyword=" +
        this.msg +
        "&type=search";
      axios({ url: url, type: "get" })
        .then(res => {
          this.name = res.data[0].name;
          this.address = res.data[0].address;
          this.latitude = res.data[0].latitude;
        })
        .catch(err => console.log(err));
    },
    onClickLeft() {
      history.back();
    }
  }
};
</script>

<style  scoped>
p {
  text-align: center;
  margin-top: 10vw;
}
</style>
