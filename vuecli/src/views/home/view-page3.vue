<template>
  <div>
    <kerasToTfjs class="mb-3"></kerasToTfjs>
    <preTrainModel></preTrainModel>
  </div>
</template>

<script>
import kerasToTfjs from '../../components/Ai/com-keras-to-tfjs.vue'
import preTrainModel from '../../components/Ai/com-pre-train.vue'
export default {
  components: {
    kerasToTfjs,
    preTrainModel,
  },
}
</script>

<style lang="scss" scoped></style>
