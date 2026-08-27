<script setup lang="ts">
import { ref } from 'vue'
import { useHeartRain } from '../../composables/useHeartRain'

const container = ref<HTMLElement | null>(null)
useHeartRain(container)
</script>

<template>
  <div ref="container" class="heart-rain-layer" aria-hidden="true" />
</template>

<style scoped lang="scss">
.heart-rain-layer {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 999999;
}
</style>
