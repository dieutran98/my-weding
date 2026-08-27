<script setup lang="ts">
import { computed } from 'vue'
import { useInviteSide } from '../../composables/useInviteSide'
import { weddingData } from '../../data/wedding'
import EventCard from './EventCard.vue'

const { side } = useInviteSide()
const events = computed(() =>
  weddingData.events.filter((event) => event.audience === 'both' || event.audience === side),
)

const monogram = computed(
  () => `D & H`,
)
</script>

<template>
  <section id="events" class="events section">
    <div class="container">
      <div class="events__layout">
        <div class="events__text">
          <p class="eyebrow events__eyebrow">Lưu lại ngày trọng đại</p>
          <p class="heading-script">Những</p>
          <h2 class="heading-lg events__heading">SỰ KIỆN</h2>
          <p class="events__intro">
            Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi trong ngày trọng đại này.
          </p>

          <div class="events__list">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
          </div>
        </div>

        <div class="events__photo">
          <img :src="weddingData.eventsImage" alt="Ảnh cưới cô dâu chú rể" />

          <svg class="events__badge" viewBox="0 0 140 140" aria-hidden="true">
            <defs>
              <path id="badge-circle" d="M 70,70 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0" />
            </defs>
            <circle cx="70" cy="70" r="54" fill="none" stroke="var(--color-accent)" stroke-width="0.75" />
            <text class="events__badge-text">
              <textPath href="#badge-circle" startOffset="0%">
                Từ nay trở đi, đông có nắng ấm, hạ có gió mát, em có anh.
              </textPath>
            </text>
            <text x="70" y="78" text-anchor="middle" class="events__badge-monogram">{{ monogram }}</text>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.events {
  &__layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;

    @include respond-to(desktop) {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  &__text {
    order: 2;

    @include respond-to(desktop) {
      order: initial;
    }
  }

  &__eyebrow {
    position: relative;
    padding-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 2.5rem;
      border-top: 1px solid var(--color-accent);
    }
  }

  &__heading {
    margin-top: -0.5rem;
  }

  &__intro {
    max-width: 32rem;
    margin: 1.5rem 0 0;
    color: var(--color-muted);
  }

  &__list {
    margin-top: 2.5rem;
    border-top: 1px solid var(--color-border);
  }

  &__photo {
    position: relative;
    order: 1;

    @include respond-to(desktop) {
      order: initial;
    }

    img {
      width: 100%;
      aspect-ratio: 3 / 4;
      object-fit: cover;
      border: 1px solid var(--color-border);
      outline: 1px solid var(--color-border);
      outline-offset: 8px;
      border-radius: 40% 40% 0 0 / 18% 18% 0 0;
    }
  }

  &__badge {
    position: absolute;
    top: -1.75rem;
    right: -0.5rem;
    width: 6.5rem;
    height: 6.5rem;

    @include respond-to(tablet) {
      width: 8rem;
      height: 8rem;
    }
  }

  &__badge-text {
    font-family: var(--font-sans);
    font-size: 5.5px;
    letter-spacing: 0.15em;
    fill: var(--color-accent);
  }

  &__badge-monogram {
    font-family: var(--font-script);
    font-size: 1.75rem;
    fill: var(--color-text);
  }
}
</style>

