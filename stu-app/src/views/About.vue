<template>
  <div class="about">
    <h1 style="text-align:center;">考勤</h1>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="第一学期" name="1">
        <p @click="msg">高数</p>
        <p @click="msg">高数几何代数</p>
        <!-- <router-link :to=""></router-link> -->
      </van-collapse-item>
      <van-collapse-item title="第二学期" name="2">
        <p @click="msg">英语</p>
        <p @click="msg">英语3</p>
      </van-collapse-item>
      <van-collapse-item title="第三学期" name="3">
        <p @click="msg">思想品德</p>
        <p @click="msg">思想品德4</p>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [" "]
    };
  },
  methods: {
    msg(v) {
      console.log(v.target.innerText);
      this.$router.push({
        name: "checkWork",
        params: { id: v.target.innerText }
      });
    }
  }
};
</script>
