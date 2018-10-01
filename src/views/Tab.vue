<template>
  <div class="Tab">
    <el-tabs type="border-card">
      <el-tab-pane label="前端">
        <qianduan></qianduan>
      </el-tab-pane>
      <el-tab-pane label="福利">
        <fuli></fuli>
      </el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import qianduan from '../components/QianDuan'
import fuli from '../components/FuLi'

export default {
  name: 'Tab',
  components: {
    'qianduan': qianduan,
    'fuli': fuli
  },
  data () {
    return {
      List: []
    }
  },
  mounted () {
    console.log('hello word')
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
