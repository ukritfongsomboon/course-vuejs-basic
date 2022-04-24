<template>
  <v-navigation-drawer v-model="drawer" bottom app clipped>
    <v-list nav dense>
      <v-list-item-group active-class="secondary text1--text">
        <v-list-item v-for="item in menu" :key="item.name" :to="{ name: item.name }">
          <v-list-item-title>
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array,
      default: () => [],
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
