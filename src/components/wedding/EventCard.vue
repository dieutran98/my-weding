<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'
import type { WeddingEvent } from '../../types/wedding'

const props = defineProps<{ event: WeddingEvent }>()

const { target, isVisible } = useScrollReveal()

const openMap = (url: string) => {
  window.open(url, '_blank', 'noopener')
}
</script>

<template>
  <article
    ref="target"
    class="event-card reveal reveal-fade-up"
    :class="{ 'is-visible': isVisible }"
  >
    <span class="event-card__icon" aria-hidden="true">
      <svg v-if="props.event.icon === 'rings'" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="18" r="7" stroke="currentColor" stroke-width="1.2" />
        <circle cx="20" cy="18" r="7" stroke="currentColor" stroke-width="1.2" />
      </svg>
      <svg v-else-if="props.event.icon === 'cake'" viewBox="0 0 32 32" fill="none">
        <rect x="7" y="14" width="18" height="11" rx="1.5" stroke="currentColor" stroke-width="1.2" />
        <path d="M7 19h18" stroke="currentColor" stroke-width="1" />
        <path d="M11 14v-2a2 2 0 0 1 4 0 2 2 0 0 0 4 0 2 2 0 0 1 4 0v2" stroke="currentColor" stroke-width="1.2" />
        <path d="M16 6v4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
      </svg>
      <svg v-else viewBox="0 0 32 32" fill="none">
        <path d="M9 5h6l-1 9a2 2 0 0 1-2 1.8h0A2 2 0 0 1 10 14z" stroke="currentColor" stroke-width="1.2" />
        <path d="M12 16v6" stroke="currentColor" stroke-width="1.2" />
        <path d="M8.5 22h7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
        <path d="M20 5v11a2.5 2.5 0 0 0 5 0V5z" stroke="currentColor" stroke-width="1.2" />
        <path d="M20 9h5" stroke="currentColor" stroke-width="1.2" />
        <path d="M22.5 16v6" stroke="currentColor" stroke-width="1.2" />
        <path d="M19.5 22h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
      </svg>
    </span>

    <div class="event-card__body">
      <p class="event-card__title">{{ event.title }}</p>
      <p v-if="event.subtitle" class="event-card__subtitle">{{ event.subtitle }}</p>

      <div class="event-card__divider" />

      <p class="event-card__time">{{ event.time }}</p>
      <p class="event-card__date">{{ event.dayLabel }} · {{ event.date }}</p>
      <p v-if="event.lunarDate" class="event-card__lunar">{{ event.lunarDate }}</p>

      <p class="event-card__venue">{{ event.venueName }}</p>
      <p class="event-card__address">{{ event.address }}</p>

      <button
        v-if="event.ctaLabel"
        type="button"
        class="event-card__cta"
        @click="openMap(event.mapUrl)"
      >
        {{ event.ctaLabel }}
      </button>
    </div>
  </article>
</template>

<style scoped lang="scss">
.event-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding-block: 1.5rem;
  border-top: 1px solid var(--color-border);

  &:first-child {
    border-top: none;
  }

  &__icon {
    flex-shrink: 0;
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid var(--color-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-accent);

    svg {
      width: 1.35rem;
      height: 1.35rem;
    }
  }

  &__body {
    min-width: 0;
  }

  &__title {
    margin: 0;
    font-family: var(--font-serif);
    font-size: 1.35rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &__subtitle {
    margin: 0.15rem 0 0;
    font-family: var(--font-script);
    font-size: 1.4rem;
    color: var(--color-accent);
  }

  &__divider {
    margin: 0.75rem 0;
    width: 3rem;
    border-top: 1px dashed var(--color-border);
  }

  &__time {
    margin: 0;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    font-weight: 500;
  }

  &__date {
    margin: 0.15rem 0 0;
    color: var(--color-muted);
  }

  &__lunar {
    margin: 0.35rem 0 0;
    font-size: 0.85rem;
    color: var(--color-muted);
    font-style: italic;
  }

  &__venue {
    margin-top: 1.1rem;
    letter-spacing: 0.12em;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--color-accent);
  }

  &__address {
    margin: 0.25rem 0 0;
    font-size: 0.95rem;
    color: var(--color-muted);
  }

  &__cta {
    margin-top: 1rem;
    padding: 0.55rem 1.5rem;
    background: transparent;
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: background-color 0.25s ease, color 0.25s ease;

    &:hover {
      background-color: var(--color-accent);
      color: #fff;
    }
  }
}
</style>
