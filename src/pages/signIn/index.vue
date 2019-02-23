<template>
  <div class="sign-in-container">
    <h1>登录</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="less" scoped>
.sign-in-container {
  width: 600px;
  // border: 1px solid #ccc;
  margin: 200px auto;
  h1 {
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    color: #0094ff;
  }
}
</style>
