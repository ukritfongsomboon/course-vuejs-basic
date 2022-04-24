<template>
  <div>
    <toolbar v-model="drawer" @logout="logout"></toolbar>
    <navigation v-model="drawer" :menu="menu"></navigation>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import toolbar from '@/components/Layout/com-toolbar.vue'
import navigation from '@/components/Layout/com-navigation.vue'
export default {
  created() {
    this.initMenu()
  },
  components: {
    toolbar,
    navigation,
  },
  data() {
    return {
      drawer: false,
      menu: [],
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('credential')
      this.$router.push({ name: 'login' })
    },
    initMenu() {
      this.menu = [
        { name: 'page1', path: 'page1', text: 'Page 1', icon: 'mdi-clock-time-four-outline' },
        { name: 'page2', path: 'page2', text: 'Page 2', icon: 'mdi-clock-time-four-outline' },
      ]
    },
  },
}
</script>

<style lang="scss" scoped></style>
