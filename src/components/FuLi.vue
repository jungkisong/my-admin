<template>
  <div class="FuLi">
    <el-row :gutter="20" v-loading="loading">
      <el-col :span="6" v-for="item in List" v-bind:key="item._id">
        <el-card :body-style="{ padding: '0px' }">
          <div class="image"><img :src="item.url"></div>
          <div style="padding: 10px;">
            <p>{{item.desc}}</p>
            <p>{{item.who}}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
        url: 'http://gank.io/api/data/福利/12/' + pageNo
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
  .el-col {
    margin-bottom: 20px;
  }
  .image{
    height: 300px;
    overflow: hidden;
  }
  .image img{width: 100%;}
</style>
