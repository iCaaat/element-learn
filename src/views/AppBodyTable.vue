<script>
export default {
  name: 'AppBodyTable',
  data() {
    return {
      tableDate: [
        { name: '张三', age: 20, address:'北京市', phone:'xxxxxxxxx', sex: 'male'},
        { name: '张三', age: 20, address:'北京市', phone:'xxxxxxxxx', sex: 'male'},
        { name: '张三', age: 20, address:'北京市', phone:'xxxxxxxxx', sex: 'male'},
      ]
    }
  }
}
</script>

<template>
<div>
  <!-- 搜索表单 -->
  <div style="margin-bottom: 20px">
    <el-input style="width: 240px;" placeholder="输入名称"></el-input>
    <el-input style="width: 240px; margin-left: 5px;" placeholder="请输入联系方式"></el-input>
    <el-button style="margin-left: 5px;" type="primary"><i class="el-icon-search"></i>搜索</el-button>
  </div>

  <!-- 表格 -->
  <el-table :data="tableDate" stripe>
    <el-table-column prop='name' label="名称"></el-table-column>
    <el-table-column prop='age' label="年龄"></el-table-column>
    <el-table-column prop='address' label="地址"></el-table-column>
    <el-table-column prop='phone' label="联系方式"></el-table-column>
    <el-table-column prop='sex' label="性别"></el-table-column>
  </el-table>

  <!-- 分页 -->
  <div style="margin-top: 20px">
    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
  </div>
</div>
</template>

<style scoped>

</style>