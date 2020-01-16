<template>
  <div class="check">
    <van-nav-bar title="🤔请假" left-text="返回" left-arrow @click-left="onClickLeft" />
    <br />
    <van-cell-group>
      <van-field
        v-model="value1"
        label="姓名"
        left-icon="smile-o"
        right-icon="warning-o"
        placeholder="姓名"
      />
      <van-field v-model="value2" clearable label="事由" left-icon="coupon" placeholder="事由" />
    </van-cell-group>
    <!-- 从这个时间 -->
    <van-cell is-link @click="showPopup">起始时间</van-cell>
    <van-popup position="bottom" v-model="show">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="daeta"
        @cancel="close"
        @change="change"
      />
    </van-popup>
    <p>开始：{{chosedata}}</p>
    <!-- 到这个事件 -->
    <van-cell is-link @click="showPopupa">结束时间</van-cell>
    <van-popup position="bottom" v-model="showa">
      <van-datetime-picker
        v-model="currentDatea"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="daetaa"
        @cancel="closea"
        @change="changea"
      />
    </van-popup>
    <p>结束：{{chosedataa}}</p>
    <van-button @click="committe" size="large" plain type="info">😏 提交</van-button>
  </div>
</template>
<script>
import { check, getInfo } from "@/api/user";
export default {
  data() {
    return {
      value1: "",
      value2: "",
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: "",
      currentDatea: "",
      chosedata: "",
      chosedataa: "",
      show: false,
      showa: false
    };
  },
  created() {
    getInfo(localStorage.getItem("user_token")).then(
      res => (this.value1 = res.nickName)
    );
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },

    showPopup() {
      this.show = true;
    },
    showPopupa() {
      this.showa = true;
    },
    daeta(value) {
      this.show = false;
    },
    daetaa(value) {
      this.showa = false;
    },
    close() {
      this.show = false;
    },
    closea() {
      this.showa = false;
    },
    change(e) {
      this.chosedata =
        e.getValues()[0] +
        "年" +
        e.getValues()[1] +
        "月" +
        e.getValues()[2] +
        "日" +
        e.getValues()[3] +
        "时" +
        e.getValues()[4] +
        "分";
    },
    changea(e) {
      this.chosedataa =
        e.getValues()[0] +
        "年" +
        e.getValues()[1] +
        "月" +
        e.getValues()[2] +
        "日" +
        e.getValues()[3] +
        "时" +
        e.getValues()[4] +
        "分";
    },
    committe(v) {
      let a = this.chosedata + "-" + this.chosedataa;
      if (this.value2 == "") {
        console.log(v.target.innerText);
        v.target.innerText = "没有事由😂";
      } else {
        check({
          name: this.value1,
          descriptions: this.value2,
          quantity: a,
          price: "请假"
        }).then(res => {
          (v.target.innerText = "成功😉"), history.back();
        });
      }
    }
  }
};
</script>
<style  scoped>
p {
  padding: 10px;
}
</style>
