<template>
  <div id="app">
    <!--布局容器-->
    <div class="layout">
      <el-container>
        <el-header>
          <el-col :span="2"><div class="grid-content bg-purple">logo</div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple-light">
            这是一个element使用示例，
            目前在做另一个类似的vue项目而没有完善此页面，
            因此这只是个示例表示已学
          </div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple">我的账号</div></el-col>
        </el-header>

        <el-container>
          <el-aside width="200px">
            <el-menu
                default-active="$route.path"
                router
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
              <el-submenu index="/">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>首页</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-aside>

          <!--主体-->
          <el-main>
            <AppBodyTable></AppBodyTable>
          </el-main>

        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.layout {
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  min-height: 500px;
}

.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}


</style>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>