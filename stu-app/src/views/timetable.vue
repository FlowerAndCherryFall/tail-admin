<template>
  <div class="about">
    <h1 style="text-align:center;">课表</h1>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="第一学期" name="1">
        <p>高数</p>
        <p>大学英语</p>
      </van-collapse-item>
      <van-collapse-item title="第二学期" name="2">
        <p>心理健康</p>
        <p>计算机基础</p>
      </van-collapse-item>
      <van-collapse-item title="第三学期" name="3">
        <p>计算机发展史</p>
        <p>素描</p>
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
  }
};
</script>
