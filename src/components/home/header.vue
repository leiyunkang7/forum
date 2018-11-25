<template>
  <div class="forum-header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">发现</el-menu-item>
      <el-menu-item index="3">话题</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect() {}
  }
};
</script>

<style lang="less" scoped>
.forum-header {
  width: 1000px;
  margin: 0 auto;
}
</style>
