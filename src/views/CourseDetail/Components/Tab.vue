<template>
  <div>
    <cube-tab-bar v-model="selectedLabelSlots" show-slider inline >
      <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label" :values ="item.label"></cube-tab>
    </cube-tab-bar>
    <component :videoInfo="videoInfo" :chapters="chapters" :is="selectedLabelSlots==='简介'? 'Summary':'Catalog' "></component>
  </div>
</template>

<script>
import Summary from "./Summary";
import Catalog from "./Catalog";

export default {
  components: {
    Summary,
    Catalog,
  },
  props: {
    chapters: {
      type: Array,
      required: true,
    },
    videoInfo:{
        type:Object,
        required:true
    }
  },
  data() {
    return {
      selectedLabelSlots: "简介",
      tabs: [
        {
          label: "简介",
          icon: "cubeic-home",
        },
        {
          label: "目录",
          icon: "cubeic-like",
        },
      ],
    };
  },
};
</script>