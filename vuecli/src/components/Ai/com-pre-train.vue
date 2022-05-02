<template>
  <div>
    <v-card class="" elevation="0" max-width="" outlined>
      <v-card-title class="text3--text">
        <div>Pretrain Model</div>
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
          <img v-show="urlImage != ''" :src="urlImage" alt="" id="imgPre" />
        </div>

        <!-- <div class="text3--text text-h4">Result : {{ className }}</div> -->
        <div class="text3--text text-h4">
          <ul>
            <li v-for="item in className" :key="item.bbox[0]">
              {{ item.class }} {{ CalScore(item.score) }}
            </li>
          </ul>
        </div>
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
      urlImage: '',
      className: [],
      loading: false,
    }
  },
  async created() {
    // TODO Set backend Engine
    console.log('\nBefore Set backend :\t', window.tf.getBackend())
    window.tf.setBackend('webgl')
    console.log('After Set backend :\t', window.tf.getBackend())
  },

  methods: {
    Upload(e) {
      this.loading = true
      this.className = []

      // TODO  Get File Upload
      // this.urlImage = URL.createObjectURL(e.target.files[0])
      this.urlImage = URL.createObjectURL(e) // Vuetify

      // TODO Get element show image
      let image = document.getElementById('imgPre')

      window.cocoSsd.load().then((model) => {
        model.detect(image).then((prediction) => {
          this.className = prediction
          this.loading = false
        })
      })
    },
    CalScore(val) {
      var a = val * 100
      a = a.toFixed(2)
      return a
    },
  },
}
</script>

<style lang="css" scoped>
#imgPre {
  height: 300px;
  width: auto;
}
</style>
