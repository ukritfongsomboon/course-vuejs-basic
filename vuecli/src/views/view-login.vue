<template>
  <div>
    <div class="center">
      <v-card elevation="8" class="pa-5">
        <v-card-text>
          <v-card-title>Login</v-card-title>
          <v-text-field
            prepend-inner-icon="mdi-account-outline"
            outlined
            color="primary"
            dense
          ></v-text-field>
          <v-text-field
            prepend-inner-icon="mdi-lock-outline"
            type="password"
            outlined
            color="primary"
            dense
          ></v-text-field>
          <v-btn elevation="1" block color="primary" v-on:click="login">Login</v-btn>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      localStorage.setItem('credential', 'vue.js')
      this.$router.push({ name: 'home' })
    },
  },
}
</script>

<style lang="css">
.center {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
