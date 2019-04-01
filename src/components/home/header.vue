<template>
  <div class="forum-header">
    <nav class="forum-menu">
      <a class="is-active">首页</a> <a>发现</a> <a>话题</a>
    </nav>
    <div class="search-bar-wrapper">
      <el-input placeholder="搜索你感兴趣的内容…" v-model="questionText">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button
        type="primary"
        class="question-btn"
        size="medium"
        @click="questionVisible = true"
        >提问</el-button
      >
    </div>

    <el-dialog :visible.sync="questionVisible">
      <el-input
        type="textarea"
        placeholder="写下你的问题，准确地描述问题更容易得到解答"
        v-model="questionText"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="publish">发布问题</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "/",
      questionVisible: false,
      questionText: ""
    };
  },
  methods: {
    ...mapActions("home", ["findQuestion"]),
    handleSelect() {},
    async createQuestion() {
      return await this.axios.post("/question", {
        question_user_id: 1,
        question_content: this.questionText
      });
    },
    async publish() {
      let { data } = await this.createQuestion();
      this.$message({
        message: `${data}发布成功!`,
        type: "success"
      });
      this.questionVisible = false;
      this.findQuestion();
    }
  }
};
</script>

<style lang="less" scoped>
.forum-header {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  height: 100%;

  .forum-menu {
    display: inline-flex;
    justify-content: space-between;
    height: 30px;
    margin-right: 18px;
    // margin-left: 27px;
    color: #999;
    a {
      padding: 0 15px;
      font-size: 15px;
      line-height: 30px;
      color: #8590a6;
      cursor: pointer;
      &:hover {
        color: #175199;
      }
      &.is-active {
        color: #444;
      }
    }
  }

  .search-bar-wrapper {
    .el-input {
      width: 326px;
      background: #f6f6f6;
      height: 34px;
      line-height: 34px;
      margin-right: 16px;
    }
    .question-btn {
      margin-top: 12px;
    }
  }
}
</style>
