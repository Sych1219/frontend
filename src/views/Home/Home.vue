<template>
  <div>
    <home-banner :banners="banners"></home-banner>
    <video-list :videoList="videoList"></video-list>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeBanner from "./Components/Banner.vue";
import VideoList from "./Components/VideoList.vue";
import HomeFooter from "@/components/CommonFooter.vue";
import { getBanner, getVideoList } from "@/api/getData.js";

export default {
  components: {
    HomeBanner,
    VideoList,
    HomeFooter,
  },
  data() {
    return {
      banners: [],
      videoList: [],
    };
  },
  methods: {
    async getBanners() {
      try {
        const res = await getBanner();
        if (res.data.code == 0) {
          this.banners = res.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getVideos() {
      try {
        const videos = await getVideoList();
        // console.log(videos)
        if (videos.data.code == 0) {
          this.videoList = videos.data.data;
          // console.log(this.videoList)
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getBanners();
    this.getVideos();
  },
};
</script>

<style lang="scss" scoped></style>