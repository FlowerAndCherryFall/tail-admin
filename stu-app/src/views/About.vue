<template>
  <div class="about">
    <van-collapse v-model="activeNames">
      <van-collapse-item title="第一学期" name="1">
        <p>课题</p>
        <p>课题</p>
      </van-collapse-item>
      <van-collapse-item title="第二学期" name="2">
        <p>课题</p>
        <p>课题</p>
      </van-collapse-item>
      <van-collapse-item title="第三学期" name="3">
        <p>课题</p>
        <p>课题</p>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  }
};
</script>
