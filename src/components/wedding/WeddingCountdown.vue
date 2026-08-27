<script setup lang="ts">
import { useCountdown } from '../../composables/useCountdown'
import { weddingData } from '../../data/wedding'

const { remaining } = useCountdown(weddingData.weddingDate)
</script>

<template>
  <section class="countdown section">
    <div class="container text-center">
      <p class="eyebrow">Invitation</p>
      <p class="countdown__names heading-lg">
        {{ weddingData.groom.firstName }} - {{ weddingData.bride.firstName }}
      </p>

      <p v-if="remaining.isPast" class="countdown__done">Đám cưới đã diễn ra. Cảm ơn bạn!</p>
      <div v-else class="countdown__grid">
        <div class="countdown__item">
          <p class="countdown__value">{{ String(remaining.days).padStart(2, '0') }}</p>
          <p class="countdown__label">Ngày</p>
        </div>
        <div class="countdown__item">
          <p class="countdown__value">{{ String(remaining.hours).padStart(2, '0') }}</p>
          <p class="countdown__label">Giờ</p>
        </div>
        <div class="countdown__item">
          <p class="countdown__value">{{ String(remaining.minutes).padStart(2, '0') }}</p>
          <p class="countdown__label">Phút</p>
        </div>
        <div class="countdown__item">
          <p class="countdown__value">{{ String(remaining.seconds).padStart(2, '0') }}</p>
          <p class="countdown__label">Giây</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.countdown {
  &__names {
    margin: 0.5rem 0 2rem;
  }

  &__done {
    font-family: var(--font-serif);
    font-size: 1.25rem;
  }

  &__grid {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  &__item {
    min-width: 4.5rem;
  }

  &__value {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 6vw, 3rem);
    margin: 0;
    color: var(--color-accent);
  }

  &__label {
    margin: 0.25rem 0 0;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-muted);
  }
}
</style>
