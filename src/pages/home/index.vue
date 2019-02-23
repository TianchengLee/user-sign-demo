<template>
  <div class="home-container">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户中心</span>
            </template>
            <!-- el-menu > el-menu-item el-submenu el-menu-item-group -->
            <el-menu-item-group>
              <template slot="title">收货人信息</template>
              <el-menu-item index="1-1">所有收货人信息</el-menu-item>
              <el-menu-item index="1-2">武汉收货人信息</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="用户安全">
              <el-menu-item index="1-3">修改密码</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户中心</span>
            </template>
            <!-- el-menu > el-menu-item el-submenu el-menu-item-group -->
            <el-menu-item-group>
              <template slot="title">收货人信息</template>
              <el-menu-item index="2-1">所有收货人信息</el-menu-item>
              <el-menu-item index="2-2">武汉收货人信息</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="用户安全">
              <el-menu-item index="2-3">修改密码</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div style="display: flex; align-items: center">
          <p>昵称: {{userInfo.nickname}} </p>
          <el-button @click="signOut" type="danger">退出登录</el-button>
        </div>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}')
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "1-1":
          // 处理1-1的回调
          this.$router.push("/home/allReceiver");
          break;
        case "1-2":
          // this.$router.push("/home/wuhanReceiver");
          break;
      }
    },
    signOut() {
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      this.$message({
        type: 'success',
        message: '恭喜您退出成功!'
      })
      this.$router.push('/')
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  .el-menu {
    border: none;
  }
}
</style>
