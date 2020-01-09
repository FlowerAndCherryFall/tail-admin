<template>
  <div id="app">
    <div id="nav"></div>
    <HelloWorld class="hello" />
  </div>
</template>
<script>
import HelloWorld from "@/layout/index.vue";
export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>
<style  scoped>
.hello {
  height: 100%;
}
</style>
