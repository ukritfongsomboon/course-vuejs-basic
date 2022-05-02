<template>
  <div>
    <v-card class="" elevation="0" max-width="" outlined>
      <v-card-title class="text3--text">
        <div>Mnist Model from Keras to tensorflow JS</div>
      </v-card-title>
      <v-card-text>
        <div>
          <v-file-input
            prepend-icon=""
            label="File input"
            prepend-inner-icon="mdi-camera"
            single-line
            show-size
            outlined
            dense
            color="primary"
            :loading="loading"
            @change="Upload"
          ></v-file-input>
          <!-- <input type="file" @change="Upload" /> -->
        </div>
        <div>
          <img v-show="urlImage != ''" :src="urlImage" alt="" id="img" />
        </div>
        <div class="text3--text text-h4">Result : {{ className }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color=""> </v-btn>
      </v-card-actions>
    </v-card>

    <!-- <img src="@/assets/images.jpg" alt="" id="img" />
    <v-btn small elevation="" color="" @click="Predict">Predic</v-btn> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: '',
      urlImage: '',
      className: '',
      loading: false,
    }
  },
  async created() {
    //  console.log(window.tf.getBackend());
    //  const model = window.tf.sequential();
    //  console.log(model)

    // TODO Load Model From local model
    this.model = await window.tf.loadLayersModel('/model/model.json')

    // TODO Set backend Engine
    // console.log('\nBefore Set backend :\t', window.tf.getBackend())
    window.tf.setBackend('webgl')
    // console.log('After Set backend :\t', window.tf.getBackend())
  },

  methods: {
    Upload(e) {
      this.loading = true
      // Refs https://www.tabnine.com/code/javascript/functions/%40tensorflow%2Ftfjs-core/resizeBilinear
      // Refs https://deeplizard.com/learn/video/nnxJyxtIuFM
      // Refs https://bobbyhadz.com/blog/javascript-get-index-of-max-value-in-array

      // TODO  Get File Upload
      // this.urlImage = URL.createObjectURL(e.target.files[0])
      this.urlImage = URL.createObjectURL(e) // Vuetify

      // TODO Get element show image
      let image = document.getElementById('img')

      setTimeout(async () => {
        // TODO Resape image to [28,28,1]
        let imageNew = await window.tf.browser
          .fromPixels(image)
          .resizeBilinear([28, 28])
          .slice([0, 0, 0], [28, 28, 1])
          .toFloat()
          .reshape([1, 28, 28, 1]) // 1个图片 28 x 28 黑白
        // .expandDims()

        // TODO Prediction image
        let predictions = await this.model.predict(imageNew).data()
        // console.log(predictions)

        // TODO class from model
        const className = predictions.indexOf(Math.max(...predictions))
        this.className = className
        // console.log(className)
        this.loading = false
      }, 50 * 1)
    },
  },
}
</script>

<style lang="css" scoped>
#img {
  height: 300px;
  width: auto;
}
</style>
