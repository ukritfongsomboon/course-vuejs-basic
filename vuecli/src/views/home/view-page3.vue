<template>
  <div>
    <!-- <realtime class="mb-3"></realtime> -->
    <kerasToTfjs class="mb-3"></kerasToTfjs>
    <preTrainModel class="mb-3"></preTrainModel>
  </div>
</template>

<script>
import kerasToTfjs from '../../components/Ai/com-keras-to-tfjs.vue'
import preTrainModel from '../../components/Ai/com-pre-train.vue'
// import realtime from '../../components/Ai/com-realtime.vue'
export default {
  components: {
    kerasToTfjs,
    preTrainModel,
    // realtime,
  },
}
</script>

<style lang="scss" scoped></style>
