<template>
  <span>
    {{ count }} : <button @click="increment">Increment</button>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value += 1
    }
    return {
      count,
      increment,
    }
  },
})
</script>
