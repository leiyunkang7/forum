<template>
  <div class="question-item">
    <router-link :to="`/question/${question.question_id}`">{{
      question.question_content
    }}</router-link>
  </div>
</template>

<script>
export default {
  name: "QuestionItem",
  props: {
    question: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.question-item {
  padding: 20px 0;
  border-bottom: 1px solid #f0f2f7;
  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    &:hover {
      color: #175199;
    }
  }
}
</style>
