<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'
import { weddingData } from '../../data/wedding'

const { target, isVisible } = useScrollReveal()

// Prefix the saint name when present, e.g. "Giuse Nguyễn Văn Thắng".
const withSaintName = (saintName: string | undefined, name: string) =>
  [saintName, name].filter(Boolean).join(' ')
</script>

<template>
  <section class="families section">
    <div class="container">
      <h2 class="text-center heading-lg">Gia đình hai bên</h2>

      <div
        ref="target"
        class="families__grid reveal reveal-fade-up"
        :class="{ 'is-visible': isVisible }"
      >
        <div class="families__col">
          <p class="eyebrow">Nhà trai</p>
          <p class="families__name">
            Ông: {{ withSaintName(weddingData.groomFamily.fatherSaintName, weddingData.groomFamily.father) }}
          </p>
          <p class="families__name">
            Bà: {{ withSaintName(weddingData.groomFamily.motherSaintName, weddingData.groomFamily.mother) }}
          </p>
          <p class="families__address">{{ weddingData.groomFamily.address }}</p>
        </div>

        <div class="families__divider" aria-hidden="true" />

        <div class="families__col">
          <p class="eyebrow">Nhà gái</p>
          <p class="families__name">
            Ông: {{ withSaintName(weddingData.brideFamily.fatherSaintName, weddingData.brideFamily.father) }}
          </p>
          <p class="families__name">
            Bà: {{ withSaintName(weddingData.brideFamily.motherSaintName, weddingData.brideFamily.mother) }}
          </p>
          <p class="families__address">{{ weddingData.brideFamily.address }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.families {
  &__grid {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    @include respond-to(tablet) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }
  }

  &__col {
    flex: 1;
    max-width: 320px;
    margin-inline: auto;
  }

  &__divider {
    width: 1px;
    height: 100px;
    background: var(--color-border);
    display: none;

    @include respond-to(tablet) {
      display: block;
    }
  }

  &__name {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    margin: 0.35rem 0;
  }

  &__address {
    color: var(--color-muted);
    margin-top: 0.75rem;
  }
}
</style>
