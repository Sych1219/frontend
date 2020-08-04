<template>
  <div>
    <detail-header :videoInfo="videoInfo"></detail-header>
    <detail-course :videoInfo="videoInfo"></detail-course>
    <detail-tab :videoInfo="videoInfo" :chapters="chapters"></detail-tab>
    <footer>
        <router-link :to="{path:'/pay', query:{video_id:this.$route.query.video_id}}" class="user_buy">
        <button>立即购买</button>
        </router-link>
    </footer>
  </div>
</template>

<script>
import DetailHeader from "./Components/Header";
import DetailCourse from "./Components/Course";
import DetailTab from "./Components/Tab";
import { getVideoDetailById } from "@/api/getData.js";

export default {
  components: {
    DetailHeader,
    DetailCourse,
    DetailTab,
  },
  data() {
    return {
      videoInfo: {},
      chapters: [],
    };
  },
  methods: {
    async getVideo(vid) {
      try {
        // console.log("video info method getvideodetail by id")
        const res = await getVideoDetailById(vid);
        console.log(res)
        console.log(res.data.code);
        if (res.data.code == 0) {
          this.videoInfo = res.data.data;
          this.chapters = res.data.data.chapter_list;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    console.log(this.$route.query.video_id);
    console.log("in mounterd");
    this.getVideo(this.$route.query.video_id);
  },
};
</script>

<style lang="scss" scoped>
//底部
footer {
  // fixed固定在底部
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 8px 0;
  background-color: #fff;
  z-index: 999;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.05);
}
//设置购买按钮样式
button {
  display: block;
  color: #fff;
  margin: 0 auto;
  background-color: #d93f30;
  height: 34px;
  line-height: 34px;
  border-radius: 17px;
  width: 80%;
  border: none;
  font-size: 15px;
  text-align: center;
}
</style>