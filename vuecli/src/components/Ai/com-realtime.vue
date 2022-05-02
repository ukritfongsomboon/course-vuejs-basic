<template>
  <v-card class="" elevation="0" outlined max-width="">
    <v-card-title class="text3--text">Realtime Prediction</v-card-title>
    <v-card-text>
      <div>
        <video hidden id="video"></video>
        <canvas id="can"></canvas>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      model: '',
      video: '',
      canvas: '',
      ctx: '',
      videoWidth: 0,
      videoHeight: 0,
      dialog: false,
      recursive: '',
    }
  },
  methods: {
    async aiPredic() {
      const returnTensors = false
      const flipHorizontal = false
      const annotateBoxes = true

      const predictions = await this.model.estimateFaces(
        this.video,
        returnTensors,
        flipHorizontal,
        annotateBoxes
      )

      this.ctx.clearRect(0, 0, this.videoWidth, this.videoHeight)
      this.ctx.drawImage(this.video, 0, 0)

      if (predictions.length > 0) {
        for (let i = 0; i < predictions.length; i++) {
          if (returnTensors) {
            predictions[i].topLeft = predictions[i].topLeft.arraySync()
            predictions[i].bottomRight = predictions[i].bottomRight.arraySync()
            if (annotateBoxes) {
              predictions[i].landmarks = predictions[i].landmarks.arraySync()
            }
          }

          const start = predictions[i].topLeft
          const end = predictions[i].bottomRight
          const size = [end[0] - start[0], end[1] - start[1]]
          this.ctx.fillStyle = 'rgba(255, 0, 0, 0.3)'
          this.ctx.fillRect(start[0], start[1], size[0], size[1])

          this.ctx.fillStyle = 'rgba(255, 255, 255, 1)'
          this.ctx.font = '30px Arial'
          this.ctx.fillText(parseFloat(predictions[i].probability).toFixed(3), start[0], start[1])

          if (annotateBoxes) {
            const landmarks = predictions[i].landmarks

            this.ctx.fillStyle = 'blue'
            for (let j = 0; j < landmarks.length; j++) {
              const x = landmarks[j][0]
              const y = landmarks[j][1]
              this.ctx.fillRect(x, y, 5, 5)
            }
          }
        }
      }

      // this.recursive = window.requestAnimationFrame(this.aiPredic)
      // window.cancelAnimationFrame(this.recursive)
      // console.log(this.recursive)
    },

    async initial() {
      // TODO Set Backend
      await window.tf.setBackend('webgl')

      // TODO Set up camera
      await this.setUpCamera()

      // TODO play video stream
      await this.video.play()

      // TODO get width and height of video
      this.videoWidth = this.video.videoWidth
      this.videoHeight = this.video.videoHeight
      this.video.width = this.videoWidth
      this.video.height = this.videoHeight

      // TODO Print Shape of video
      console.log(this.videoWidth, 'x', this.videoHeight)

      // TODO Setup canvas
      await this.setUpCanvas()

      // TODO Load Model
      this.model = await window.blazeface.load()
      // this.model = await window.cocoSsd.load()

      // TODO Prediction
      this.recursive = setInterval(() => {
        this.aiPredic()
      }, 10)
    },

    hasGetUserMedia() {
      // TODO Check Mediadevice
      return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
    },

    async setUpCamera() {
      if (this.hasGetUserMedia()) {
        console.log('Camera is Detect !!')
        this.video = await document.getElementById('video')
        const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        this.video.srcObject = stream
      } else console.log('Camera is Not Detect !!')
    },

    async setUpCanvas() {
      let canvas = document.getElementById('can')

      canvas.width = this.videoWidth
      canvas.height = this.videoHeight

      this.ctx = canvas.getContext('2d')
    },
  },
  async mounted() {
    await this.initial()
  },
  destroyed() {
    clearInterval(this.recursive)
    console.log('Destroyed')
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then((stream) => {
        window.localStream = stream
        window.localStream.getTracks().forEach((track) => track.stop())
      })
      .catch((err) => {
        console.log(err)
      })
    // console.log(this.recursive)
    // while (this.recursive--) {
    //   window.cancelAnimationFrame(this.recursive)
    // }
  },
}
</script>

<style lang="scss" scoped></style>
