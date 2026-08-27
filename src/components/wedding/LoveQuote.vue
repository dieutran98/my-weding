<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'
import { weddingData } from '../../data/wedding'

const { target, isVisible } = useScrollReveal()
</script>

<template>
  <section class="love-quote section">
    <div class="container text-center">
      <div
        ref="target"
        class="love-quote__body reveal reveal-fade-up"
        :class="{ 'is-visible': isVisible }"
      >
        <p class="love-quote__mark heading-script">Love You</p>
        <p class="love-quote__text">{{ weddingData.loveQuote }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.love-quote {
  &__mark {
    color: var(--color-accent);
    margin-bottom: 1.5rem;
  }

  &__text {
    max-width: 560px;
    margin-inline: auto;
    font-family: var(--font-serif);
    font-style: italic;
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--color-muted);
  }
}
</style>
