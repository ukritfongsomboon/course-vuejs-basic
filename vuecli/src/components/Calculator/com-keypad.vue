<template>
  <div>
    <v-card outlined>
      <v-card-text>
        <v-row>
          <v-col>
            <v-btn
              color="text2"
              class="white--text text-h4"
              block
              @click="$store.dispatch('add', 5)"
              >+</v-btn
            >
          </v-col>
          <v-col>
            <v-btn
              color="secondary"
              class="white--text text-h4"
              block
              @click="$store.dispatch('sub', 5)"
              >-</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
