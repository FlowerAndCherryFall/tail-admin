<template>
  <div class="hello">
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/about" icon="search">考勤</van-tabbar-item>
      <van-tabbar-item to="/timetable" icon="friends-o">课表</van-tabbar-item>
      <van-tabbar-item to="/myself" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "AllBottom",
  props: {
    msg: String
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
