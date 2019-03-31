<template>
  <div class="forum-header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
      @select="handleSelect"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="2">发现</el-menu-item>
      <el-menu-item index="3">话题</el-menu-item>
      <el-button
        type="primary"
        class="question-btn"
        size="medium"
        @click="questionVisible = true"
        >提问</el-button
      >
    </el-menu>

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

  .question-btn {
    margin-top: 12px;
  }
}
</style>
