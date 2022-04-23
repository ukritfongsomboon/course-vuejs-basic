<template>
  <div>
    <ul>
      <li v-for="(item, idx) in menuList" :key="`${item.name}-${idx}`">
        <router-link :to="item.path">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     menuList: [
  //       { name: 'Page1', path: '/', text: 'Page1' },
  //       { name: 'Page2', path: '/page2', text: 'Page2' },
  //     ],
  //   }
  // },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    menuList: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #4fc08d;
  box-shadow: 0 5px 9px rgba(0, 0, 0, 0.562);
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: rgb(118, 118, 118);
}

.router-link-active.router-link-exact-active {
  background-color: rgb(57, 57, 57);
}

/* li:last-child {
  float: right;
  border-right: none;
} */
</style>
