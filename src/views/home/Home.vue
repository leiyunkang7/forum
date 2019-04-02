<template>
  <div class="forum-home">
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="推荐" name="recommend"> <Recommend /> </el-tab-pane>
        <el-tab-pane label="关注" name="follow"> <Follow /> </el-tab-pane>
        <el-tab-pane label="热榜" name="hot"> <Hot /> </el-tab-pane>
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
      <Sidebar />
    </el-aside>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Recommend from "./recommend/index.vue";
import Follow from "./follow/index.vue";
import Hot from "./hot";
import Sidebar from "./sidebar";

export default {
  name: "Home",
  components: {
    Recommend,
    Follow,
    Hot,
    Sidebar
  },
  props: {
    tab: {
      type: String,
      default: "recommend"
    }
  },
  computed: {
    activeName: {
      get() {
        return this.tab;
      },
      set(val) {
        this.$router.push({ name: "home", params: { tab: val } });
      }
    }
  },
  data() {
    return {
      // activeName: "recommend",
      questions: []
    };
  },
  methods: {
    ...mapActions("home", ["findQuestion"]),
    handleClick() {},
    createPost() {
      this.axios.post("/post", {
        authorid: 1,
        title: "aaaa",
        content: "content"
      });
    },

    async createQuestion() {
      await this.axios.post("/question", {
        question_user_id: 1,
        question_content: "提问一"
      });
    }
  },
  async mounted() {
    // this.createQuestion();

    let { data } = await this.axios.get("/questions");
    this.questions = data.data;
  }
};
</script>

<style lang="less" scoped>
.forum-home {
  display: flex;
}
.el-main {
  background: #fff;
  border-radius: 2px;
  margin-right: 10px;
  padding-top: 10px;
  width: 700px;
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

  .box-card {
    margin-bottom: 10px;
  }
}
</style>
