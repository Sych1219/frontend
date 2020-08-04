<template>
  <div class="tab">
    <cube-tab-bar v-model="selectedLabelSlots" @click="clickHandler">
      <cube-tab
        v-for="(item) in tabs"
        :icon="item.icon"
        :label="item.label"
        :key="item.path"
        :value="item.path"
      ></cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelSlots: "/",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home",
          path: "/",
        },
        {
          label: "我的订单",
          icon: "cubeic-like",
          path: "/order",
        },
        {
          label: "个人中心",
          icon: "cubeic-person",
          path: "/personal",
        },
      ],
    };
  },
  methods: {
    clickHandler(path) {
      // if you clicked home tab, then print 'Home'
      console.log(path);
      if (path !== this.$route.path) {
        this.$router.push(path);
      }
    },
  },

  created() {
     this.selectedLabelSlots = this.$route.path
  },
};
</script>

<style lang="scss" scoped>
.tab {
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
}
.cube-tab_active {
  color: #3bb149;
}
</style>