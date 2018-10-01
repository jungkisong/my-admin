<template>
  <div class="block" id="pagination">
    <el-pagination
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    total: Number
  },
  methods: {
    handleCurrentChange: function (val) {
      this.$emit('pageNo', val)
    }
  }
}
</script>

<style scoped>

</style>
