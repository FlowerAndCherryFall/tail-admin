<template>
  <div class="hello">
    <div class="top">
      <van-nav-bar title="sweet" left-arrow />
    </div>
    <div class="main">
      <router-view />
    </div>

    <AllBottom></AllBottom>
  </div>
</template>

<script>
import AllBottom from "./components/bottom";
export default {
  name: "HelloWorld",
  components: {
    AllBottom
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 45px;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
.main {
  /* background: rgba(0, 0, 0, 0.5); */
  margin: 45px 0 60px 0;
  overflow-y: auto;
}
#hello {
  height: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
}
</style>
