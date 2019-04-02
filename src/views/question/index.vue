<template>
  <div class="question-main">{{ questionId }}</div>
</template>

<script>
export default {
  name: "QuestionMain",
  computed: {
    questionId() {
      return this.$route.params.questionId;
    }
  }
};
</script>

<style lang="less" scoped>
.question-main {
}
</style>
