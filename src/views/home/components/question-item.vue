<template>
  <div
    class="question-item"
    ref="questionItem"
    :class="{ 'is-expand': isExpand }"
  >
    <router-link :to="`/question/${question.question_id}`">{{
      question.question_content
    }}</router-link>
    <div class="content" :class="{ 'has-img': !!question.preview }">
      <img v-show="question.preview && !isExpand" :src="question.preview" alt />
      <div class="description" @click="isExpand = !isExpand">
        {{ isExpand ? question.content : question.pre_content }}
        <button class="description-more-btn" type="button" v-show="!isExpand">
          阅读全文👇
        </button>
      </div>
    </div>
    <div class="actions" :class="{ 'is-fixed': isFixed }">
      <span class="vote-wapper">
        <button type="button">↑赞同{{ question.voteup_count }}</button>
        <button type="button">↓</button>
      </span>
      <button type="button">{{ question.comments_count }}条评论</button>
      <button type="button">分享</button>
      <button type="button">收藏</button>
      <button type="button">感谢</button>
      <el-popover
        popper-class="more-popper"
        placement="bottom"
        trigger="click"
        width="96"
      >
        <div class="buttons-wrapper">
          <button type="button">没有帮助</button>
          <button type="button">举报</button>
          <button type="button">不感兴趣</button>
        </div>
        <button class="more-btn" slot="reference" type="button">...</button>
      </el-popover>
      <span v-show="isExpand" @click="isExpand = false" class="collapse-btn"
        >收起👆</span
      >
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
    return {
      isExpand: false,
      isFixed: false
    };
  },
  watch: {
    async isExpand(val) {
      await this.$nextTick();
      if (val) {
        this.handle();
      } else {
        this.isFixed = false;
      }
    }
  },
  methods: {
    handle() {
      if (!this.$refs.questionItem) {
        return;
      }
      const { bottom } = this.$refs.questionItem.getBoundingClientRect();
      this.isFixed = bottom >= window.innerHeight && this.isExpand;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handle);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handle);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handle);
  }
};
</script>

<style lang="less" scoped>
.question-item {
  padding: 20px 0;
  border-bottom: 1px solid #f0f2f7;

  &.is-expand {
  }

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
      cursor: pointer;
      line-height: 1.67;
      &:hover {
        color: #646464;
      }
      .description-more-btn {
        background: transparent;
        border: none;
        border-radius: 0;
        color: #175199;
        padding: 0;
        cursor: pointer;
        &:hover {
          color: grey;
        }
      }
    }
    &.has-img {
      .wrap {
        max-height: 6.6em;
      }
    }
  }
  .actions {
    padding: 10px 0 0 0;
    display: flex;
    box-sizing: content-box;
    &.is-fixed {
      position: fixed;
      bottom: 0;
      box-shadow: 0 -1px 3px rgba(26, 26, 26, 0.1);
      z-index: 2;
      background: #fff;
      padding: 10px 20px;
      box-sizing: border-box;
    }
    .collapse-btn {
      border: none;
      background: transparent;
      margin-left: auto !important;
    }
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
    > button,
    .collapse-btn,
    .more-btn {
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
      vertical-align: sub;
      &:hover {
        color: #76839b;
      }
    }
  }

  .wrap {
    position: relative;
    /*line-height和height要相互配合，显示多少行就省略，就是line-height多少倍数*/
    line-height: 1.2em;
    max-height: 3.6em;
    /*此属性看需求来判断是否设置，因为设置了padding-right，多腾出了点位置，该值一般为padding-right的值的负值*/
    /*margin-left: -1em;*/
    /*此值写死成1em就好，因为省略号大概就是占用1em的空间*/
    padding-right: 1em;
    text-align: justify;
    overflow: hidden;
  }

  .wrap:before {
    position: absolute;
    right: 0;
    bottom: 0;
    content: "...";
  }

  .wrap:after {
    position: absolute;
    right: 0;
    /*宽高写死1em就好，因为省略号大概就是占用1em的空间，用来遮挡住省略号，也基本上跟wrap的padding-right一致*/
    width: 1em;
    /*与wrap的行高实际值保持一致*/
    height: 1.2em;
    content: "";
    /*要跟所在背景颜色一致才能遮挡住省略号后觉得没异样*/
    background-color: #fff;
  }
}
</style>

<style lang="less">
.more-popper {
  padding: 6px 0 !important;
  min-width: 96px !important;
  button {
    height: auto;
    padding: 0;
    line-height: inherit;
    background-color: transparent;
    background: none;
    border: none;
    border-radius: 0;
    display: block;
    padding: 0 20px;
    text-align: left;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 40px;
    font-size: 14px;
    color: #8590a6;
    &:hover {
      background: #f6f6f6;
      color: #76839b;
    }
  }
  .buttons-wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>
