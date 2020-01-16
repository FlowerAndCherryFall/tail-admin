<template>
  <div class="about">
    <van-tabs v-model="active">
      <h1 style="text-align:center;">课表</h1>
      <van-tab title="第一学期">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item._id" :title="item.name" />
        </van-list>
      </van-tab>
      <van-tab title="第二学期">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list1" :key="item._id" :title="item.name" />
        </van-list>
      </van-tab>
      <van-tab title="第三学期">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list2" :key="item._id" :title="item.name" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { taskTable } from "@/api/user";
export default {
  data() {
    return {
      active: 0,
      list: [
        {
          _id: 1,
          name: "高数"
        },
        {
          _id: 2,
          name: "高数"
        }
      ],
      list1: [
        {
          _id: 1,
          name: "英语"
        },
        {
          _id: 2,
          name: "英语"
        }
      ],
      list2: [
        {
          _id: 1,
          name: "思想品德"
        },
        {
          _id: 2,
          name: "思想品德"
        }
      ],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
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
