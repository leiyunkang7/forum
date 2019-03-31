<template>
  <div class="forum-recommend">
    <QuestionItem
      v-for="question in questions"
      :key="question.question_id"
      :question="question"
    ></QuestionItem>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import QuestionItem from "components/home/question-item.vue";

export default {
  name: "Recommend",
  components: {
    QuestionItem
  },
  computed: {
    ...mapGetters("home", ["questions"])
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("home", ["findQuestion"])
  },
  mounted() {
    this.findQuestion();
  }
};
</script>

<style lang="less" scoped></style>
