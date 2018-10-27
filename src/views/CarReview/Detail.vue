<template>
  <div>Detail
    {{id}}
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      id: this.$route.query.id
    }
  }
}
</script>

<style scoped>

</style>
