<template>
  <div class="question-item">
    <router-link :to="`/question/${question.question_id}`">
      {{ question.question_content }}
    </router-link>
    <div class="content">
      <img v-show="question.preview" :src="question.preview" alt />
      <div class="description">{{ question.pre_content }}</div>
    </div>
    <div class="actions">
      <span class="vote-wapper">
        <button type="button">↑赞同{{ question.voteup_count }}</button>
        <button type="button">↓</button>
      </span>
      <button type="button">{{ question.comments_count }}条评论</button>
      <button type="button">分享</button> <button type="button">收藏</button>
      <button type="button">感谢</button> <button type="button">...</button>
    </div>
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
    height: 28px;
    display: block;
    &:hover {
      color: #175199;
    }
  }
  .content {
    display: flex;
    img {
      width: 190px;
      height: 105px;
      margin-top: -2px;
      margin-right: 18px;
      margin-bottom: 4px;
      flex: 0 0 190px;
    }
    .description {
      margin-top: 10px;
    }
  }
  .actions {
    padding: 10px 0 0 0;
    display: flex;
    .vote-wapper {
      button {
        display: inline-block;
        font-size: 14px;
        line-height: 32px;
        text-align: center;
        cursor: pointer;
        border-radius: 3px;
        line-height: 30px;
        padding: 0 12px;
        padding: 0 10px;
        color: #0084ff;
        background: rgba(0, 132, 255, 0.1);
        border-color: transparent;
        margin-right: 5px;
      }
    }
    > button {
      display: inline-block;
      padding: 0 16px;
      font-size: 14px;
      line-height: 32px;
      color: #8590a6;
      text-align: center;
      cursor: pointer;
      background: none;
      border: 1px solid;
      line-height: inherit;
      background-color: transparent;
      border: none;
      border-radius: 0;
      margin-left: 24px;
      font-size: 14px;
      &:hover {
        color: #76839b;
      }
    }
  }
}
</style>
