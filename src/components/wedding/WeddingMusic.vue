<script setup lang="ts">
import { useWeddingMusic } from '../../composables/useWeddingMusic'

const props = defineProps<{ src: string }>()

const { isPlaying, toggle } = useWeddingMusic(props.src)
</script>

<template>
  <button
    type="button"
    class="music-button"
    :class="{ 'is-playing': isPlaying }"
    :aria-pressed="isPlaying"
    aria-label="Bật hoặc tắt nhạc nền"
    @click="toggle"
  >
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1" />
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      <path d="M12 2v3M19.07 4.93l-2.12 2.12" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.6" />
    </svg>
  </button>
</template>

<style scoped lang="scss">
.music-button {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: rgba(248, 245, 239, 0.85);
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  transition: box-shadow 0.3s ease;

  svg {
    animation: none;
  }

  &.is-playing svg {
    animation: rotate-slow 6s linear infinite;
  }

  &:hover {
    box-shadow: 0 0 0 4px rgba(155, 128, 101, 0.15);
  }
}
</style>
