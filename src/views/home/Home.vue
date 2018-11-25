<template>
  <el-container class="forum-home">
    <el-header> <MyHeader /> </el-header>
    <el-container>
      <div class="forum-container">
        <el-main>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="推荐" name="recommend"
              ><Recommend
            /></el-tab-pane>
            <el-tab-pane label="关注" name="follow"><Follow /></el-tab-pane>
            <el-tab-pane label="热榜" name="hot"><Hot /></el-tab-pane>
          </el-tabs>
        </el-main>
        <el-aside width="300px">
          <el-card class="box-card">
            <div class="global-write-nav">
              <a href="javascript:;">
                <i class="iconfont icon-document"></i> 写回答
              </a>
              <a href="javascript:;">
                <i class="iconfont icon-editor"></i> 写文章
              </a>
              <a href="javascript:;">
                <i class="iconfont icon-createtask_fill"></i> 写想法
              </a>
            </div>
          </el-card>
        </el-aside>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import MyHeader from "components/home/header.vue";
import Recommend from "./recommend.vue";
import Follow from "./follow.vue";
import Hot from "./hot.vue";

export default {
  name: "home",
  components: {
    MyHeader,
    Recommend,
    Follow,
    Hot
  },
  data() {
    return {
      activeName: "recommend"
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style lang="less" scoped>
.forum-home {
  .el-container {
    background: #f6f6f6;
  }

  .forum-container {
    display: flex;
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto;
    .el-main {
      background: #fff;
      border-radius: 2px;
      margin-right: 10px;
    }
    .el-aside {
      .global-write-nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: #444;
          font-size: 16px;
          i {
            color: #8590a6;
            margin-bottom: 6px;
            font-size: 20px;
          }
          &:hover {
            color: #175199;
          }
        }
      }
    }
  }
}
</style>
