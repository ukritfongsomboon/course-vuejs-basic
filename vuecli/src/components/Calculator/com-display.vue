<template>
  <div>
    <v-card outlined>
      <v-card-text>
        <!-- <div class="text-h1 display">{{ this.$store.state.counter }}</div> -->
        <div class="text-h1 display">{{ $store.getters.count }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.display {
  text-align: end;
}
</style>
