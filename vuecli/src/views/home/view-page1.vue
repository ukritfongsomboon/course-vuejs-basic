<template>
  <div>{{data}}</div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    }
  },
  created() {
    const options = {
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
    }
    this.axios(options).then((res) => {
      this.data = res.data
    })
  },
}
</script>

<style lang="scss" scoped></style>
