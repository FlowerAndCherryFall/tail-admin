
<template>
  <div class="main">
    <div class="message">
      <van-image round width="100px" height="100px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span>{{msg}}</span>
      <p>{{desc}}</p>
    </div>
    <van-cell-group v-for="p in list" :key="p.id">
      <van-cell :title="p.name" label />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "设置"
        },
        {
          id: 2,
          name: "院校"
        }
      ],
      msg: "热心市民金先生",
      desc: "路灯王"
    };
  }
};
</script>
<style  scoped>
.message {
  width: 100%;
  padding-left: 30px;
  margin: 0 0 20px 0;
}
</style>
