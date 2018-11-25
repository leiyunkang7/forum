<template>
  <div class="me">
    <h3>用户列表</h3>
    <el-table :data="users" stripe style="width: 100%">
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="create_time" label="创建日期" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Me",
  data() {
    return {
      users: []
    };
  },
  methods: {
    async findUsers() {
      let { data } = await this.axios.get("users");
      this.users = data;
    }
  },
  mounted() {
    this.findUsers();
  }
};
</script>

<style lang="less" scoped></style>
