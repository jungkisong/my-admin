<template>
  <div class="FuLi">
    <template>
      <el-table
        v-loading="loading"
        :data="List"
        style="width: 100%"
        :default-sort = "{prop: 'publishedAt', order: 'descending'}"
      >
        <el-table-column
          prop="desc"
          label="标题">
          <template slot-scope="scope">
            <a v-bind:href="scope.row.url" target="_blank">{{ scope.row.desc }}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="publishedAt"
          label="日期"
          sortable
          width="200">
        </el-table-column>
        <el-table-column
          prop="who"
          label="作者"
          sortable
          width="180">
        </el-table-column>
      </el-table>
    </template>
    <pagination :total="100" @pageNo="pageNo"></pagination>
  </div>
</template>

<script>
import pagination from './pagination'

export default {
  name: 'FuLi',
  components: {
    'pagination': pagination
  },
  data () {
    return {
      List: [],
      loading: true
    }
  },
  mounted () {
    this.getAjax(1)
  },
  methods: {
    pageNo: function (val) {
      this.getAjax(val)
    },
    getAjax: function (pageNo) {
      const vm = this
      vm.loading = true
      this.$axios({
        method: 'GET',
        url: 'http://gank.io/api/data/前端/10/' + pageNo
      })
        .then(function (response) {
          if (response.status === 200) {
            vm.List = response.data.results
            vm.loading = false
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cell a{
    color:#666;
    text-decoration: none;
  }
  .cell a:hover{
    text-decoration: underline;
  }
</style>
