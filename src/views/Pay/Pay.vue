<template>
  <div>
    <div class="info">
      <p class="info_title">商品信息</p>
      <div class="box">
        <div class="imgdiv">
          <img alt="课程照片" :src="userInfo.cover_img" />
        </div>
        <div class="textdiv">
          <p class="c_title">{{userInfo.title}}</p>
          <p class="price">￥:&nbsp;&nbsp;{{(userInfo.price/100).toFixed(2)}}</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <p class="money">实付：￥:&nbsp;&nbsp;{{(userInfo.price/100).toFixed(2)}}</p>
      <p class="submit" @click="pay">付款</p>
    </div>
  </div>
</template>

<script>
import { saveOrder, getVideoDetailById } from "@/api/getData.js";

export default {
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    async getUserInfo(vid) {
      try {
        const result = await getVideoDetailById(vid);
        if (result.data.code === 0) {
          this.userInfo = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async pay() {
      try {
        const result = await saveOrder(
          this.$store.state.token,
          this.$route.query.video_id
        );
        if (result.data.code === 0) {
          const totast = this.$createToast({
            txt: "下单成功",
            time: 1200,
            type: "correct",
            onTimeout: () => {
              this.$router.push("/order");
            },
          });
          totast.show();
        }else{
          const totast = this.$createToast({
            txt: "下单失败",
            time: 1200,
            type: "error",
          });
          totast.show();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getUserInfo(this.$route.query.video_id);
  },
};
</script>

<style lang="scss" scoped>
// 视频标题
.info_title {
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #d9dde1;
}

.box {
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  margin-bottom: 15px;
  .imgdiv {
    width: 105px;
    height: 59px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .textdiv {
    margin-left: 20px;
    height: 59px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .price {
      flex-shrink: 0;
    }
  }
}
//底部
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
  font-size: 16px;
  .money {
    height: 50px;
    line-height: 50px;
    flex: 2;
    text-align: center;
    background-color: #fff;
  }
  .submit {
    height: 50px;
    line-height: 50px;
    flex: 1;
    text-align: center;
    background-color: #ff2d50;
    color: #fff;
  }
}
</style>