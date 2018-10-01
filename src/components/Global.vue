<template>
  <div id="global">
    {{txt}}
  </div>
</template>
<script>
export default{
  name: 'Global',
  data () {
    return {
      msg: 'I am GLOBAL'
    }
  },
  props: {
    txt: String
  },
  mounted () {
    console.log(this.msg)
  }
}
</script>
