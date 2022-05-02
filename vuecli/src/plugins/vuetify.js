import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#4fc08d',
        secondary: '#E91E63',
        third: '#edAF88',
        text1: '#ffffff',
        text2: '#4fc08d',
        text3: '#000000',
      },
      dark: {
        primary: '#454545 ',
        secondary: '#E91E63',
        third: '#edAF88',
        text1: '#4fc08d',
        text2: '#4fc08d',
        text3: '#4fc08d',
      },
    },
  },
})
