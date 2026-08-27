<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'
import { weddingData } from '../../data/wedding'

const { target, isVisible } = useScrollReveal()

// Prefix the saint name when present, e.g. "Giuse Trần Quang Diệu".
const withSaintName = (saintName: string | undefined, name: string) =>
  [saintName, name].filter(Boolean).join(' ')
</script>

<template>
  <section id="couple" class="couple section">
    <div class="container text-center">
      <p class="eyebrow">Trân trọng báo tin</p>
      <p class="couple__label">Lễ thành hôn của</p>

      <div
        ref="target"
        class="couple__names reveal reveal-scale"
        :class="{ 'is-visible': isVisible }"
      >
        <p class="heading-script">{{ withSaintName(weddingData.groom.saintName, weddingData.groom.fullName) }}</p>
        <p class="couple__ampersand">&amp;</p>
        <p class="heading-script">{{ withSaintName(weddingData.bride.saintName, weddingData.bride.fullName) }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.couple {
  &__label {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin: 0.5rem 0 2rem;
  }

  &__names {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  &__ampersand {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.5rem;
    color: var(--color-accent);
    margin: 0;
  }
}
</style>
