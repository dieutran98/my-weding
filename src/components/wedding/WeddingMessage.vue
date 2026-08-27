<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'
import { weddingData } from '../../data/wedding'

const { target, isVisible } = useScrollReveal()
</script>

<template>
  <section class="message section">
    <div class="container">
      <div
        ref="target"
        class="message__body reveal reveal-fade-in"
        :class="{ 'is-visible': isVisible }"
      >
        <p v-for="(line, i) in weddingData.message" :key="i" class="message__line">
          {{ line }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.message {
  &__body {
    max-width: 640px;
    margin-inline: auto;
    text-align: center;
  }

  &__line {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    line-height: 2;
    margin: 0 0 0.5rem;
    color: var(--color-text);
  }
}
</style>
