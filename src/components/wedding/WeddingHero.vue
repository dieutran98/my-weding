<script setup lang="ts">
import { weddingData } from '../../data/wedding'
import WeddingMusic from './WeddingMusic.vue'

const weddingDateLabel = new Intl.DateTimeFormat('vi-VN', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).format(new Date(weddingData.weddingDate))
</script>

<template>
  <section id="hero" class="hero">
    <img :src="weddingData.heroImage" alt="Ảnh cưới cô dâu chú rể" class="hero__image" />
    <div class="hero__overlay" />

    <div class="hero__music">
      <WeddingMusic :src="weddingData.musicSrc" />
    </div>

    <div class="hero__content">
      <p class="hero__names hero__names--in">{{ weddingData.groom.firstName }}</p>
      <p class="hero__ampersand">&amp;</p>
      <p class="hero__names hero__names--in hero__names--delay">{{ weddingData.bride.firstName }}</p>

      <p class="hero__tagline">We are getting married</p>
      <p class="hero__date">{{ weddingDateLabel.replaceAll('/', '.') }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    animation: scale-in 1.6s ease-out;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(47, 42, 38, 0.15) 0%, rgba(47, 42, 38, 0.55) 100%);
  }

  &__music {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 2;
  }

  &__content {
    position: relative;
    z-index: 1;
    width: 100%;
    text-align: center;
    color: #fff;
    padding: 2.5rem 1.5rem 3.5rem;
  }

  &__names {
    font-family: var(--font-script);
    font-size: clamp(2.5rem, 9vw, 5rem);
    line-height: 1.1;
    margin: 0;
    opacity: 0;
    animation: fade-up 0.9s ease-out 0.2s forwards;

    &--delay {
      animation-delay: 0.5s;
    }
  }

  &__ampersand {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.25rem;
    margin: 0.25rem 0;
    opacity: 0;
    animation: fade-in 0.8s ease-out 0.4s forwards;
  }

  &__tagline {
    margin-top: 1.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    opacity: 0;
    animation: fade-up 0.9s ease-out 0.8s forwards;
  }

  &__date {
    margin-top: 0.5rem;
    font-family: var(--font-serif);
    font-size: 1.5rem;
    opacity: 0;
    animation: fade-up 0.9s ease-out 1s forwards;
  }
}
</style>
