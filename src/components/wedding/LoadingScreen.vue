<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Simple entrance delay so fonts/first paint settle before revealing the hero.
  window.setTimeout(() => {
    isLoading.value = false
  }, 900)
})
</script>

<template>
  <Transition name="loading-fade">
    <div v-if="isLoading" class="loading-screen" role="status" aria-live="polite">
      <span class="loading-screen__mark">D &amp; H</span>
      <span class="sr-only">Đang tải thiệp cưới…</span>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg);

  &__mark {
    font-family: var(--font-script);
    font-size: 3rem;
    color: var(--color-accent);
    animation: fade-in 0.6s ease-out;
  }
}

.loading-fade-leave-active {
  transition: opacity 0.6s ease;
}

.loading-fade-leave-to {
  opacity: 0;
}
</style>
