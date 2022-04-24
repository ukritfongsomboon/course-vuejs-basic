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
      },
      dark: {
        primary: '#454545 ',
        secondary: '#E91E63',
        third: '#edAF88',
        text1: '#ffffff',
        text2: '#4fc08d'
      },
    },
  },
})
