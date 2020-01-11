<template>
  <div class="about">
    <h1 style="text-align:center;">课表</h1>
    <van-collapse v-model="activeNames">
      <!--  -->
      <van-collapse-item title="第一学期" name="1" v-for="p in taskList" :key="p._id">
        <p>{{p.name}}</p>
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
import { taskTable } from "@/api/user";
export default {
  data() {
    return {
      activeNames: [" "],
      activeNames1: [" "],
      taskList: [],
      taskList1: [],
      taskList2: []
    };
  },
  created() {
    this.takde();
  },
  methods: {
    takde() {
      taskTable().then(res => {
        console.log(res);
        let asd = res.products;
        for (let i = 0; i < res.products.length; i++) {
          if (asd[i].productCategory) {
            if (asd[0].productCategory.name == asd[i].productCategory.name) {
              this.taskList.push(asd[i]);
            } else {
              this.taskList1.push(asd[i]);
            }
          }
        }
      });
    }
  }
};
/**展示类
 *  <van-collapse v-model="activeNames" v-for="p in themeList" :key="p._id">
      <van-collapse-item :title="p.name" :name="p._id">
        <p>计算机发展史</p>
        <p>素描</p>
      </van-collapse-item>
    </van-collapse>
 *if (asd[0].productCategory.name == asd[i].productCategory.name) {
                this.taskList.push(asd[i]);
              } else {
                this.taskList2.push(asd[i]);
              }
 */
</script>
