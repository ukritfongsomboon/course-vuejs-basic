<template>
  <v-app-bar app color="primary" dense clipped-left>
    <v-app-bar-nav-icon color="text1" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="text1--text">Page title</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="pt-5">
      <v-switch v-model="$vuetify.theme.dark" inset color="secondary"></v-switch>
    </div>
    <v-btn small class="text1--text" color="secondary" @click="$emit('logout', '')">logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Undefine',
    },
    value: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    drawer: {
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

<style lang="scss" scoped></style>
