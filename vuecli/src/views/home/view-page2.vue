<template>
  <div>
    <display></display>
    <keypad></keypad>
  </div>
</template>

<script>
import display from '@/components/Calculator/com-display.vue'
import keypad from '@/components/Calculator/com-keypad.vue'
export default {
  components: {
    display,
    keypad,
  },
}
</script>

<style lang="scss" scoped></style>
