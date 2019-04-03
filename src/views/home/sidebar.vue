<template>
  <el-card class="sidebar">
    <ul>
      <li>
        <a href>我的收藏</a>
      </li>
      <li>
        <a href>我关注的问题</a>
        <span class="number">26</span>
      </li>
      <li>
        <a href>我的邀请</a>
        <span class="number">227</span>
      </li>
      <li>
        <a href>我的余额</a>
      </li>
      <li>
        <a href>我的礼券</a>
      </li>
      <li>
        <a href>站务中心</a>
      </li>
      <li>
        <a href>版权服务中心</a>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.sidebar {
  margin-bottom: 10px;
  width: 300px;
  ul {
    list-style: none;
    padding: 8px 0;
    margin: 0;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 20px;
      cursor: pointer;
      &:hover {
        background: #f6f6f6;
        color: #76839b;
        span {
          background: #fff;
          color: #8590a6;
        }
      }
    }
    a {
      display: flex;
      align-items: center;
      padding: 0 20px;
      height: 40px;
      overflow: hidden;
      color: #8590a6;
      text-decoration: none;
    }
    span {
      padding: 1px 10px;
      border-radius: 2px;
      background: #f6f6f6;
      color: #8590a6;
      font-size: 12px;
      display: inline-block;
      height: 28px;
      line-height: 28px;
    }
  }
}
</style>

<style lang="less">
.sidebar {
  .el-card__body {
    padding: 0;
  }
}
</style>
