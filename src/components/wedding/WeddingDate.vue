<script setup lang="ts">
import { computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useInviteSide } from '../../composables/useInviteSide'
import { weddingData } from '../../data/wedding'
import { getMonthNameEn, getVietnameseWeekday, parseDMYDate } from '../../utils/date'

const { target, isVisible } = useScrollReveal()
const { side } = useInviteSide()

const reception = computed(() => weddingData.ceremony.reception[side])

const ceremonyDate = computed(() => parseDMYDate(weddingData.ceremony.weddingCeremonyDate))
const receptionDate = computed(() => parseDMYDate(reception.value.date))

const ceremonyWeekday = computed(() => getVietnameseWeekday(ceremonyDate.value))
const receptionWeekday = computed(() => getVietnameseWeekday(receptionDate.value))

const ceremonyLabel = computed(() => (side === 'bride' ? 'Lễ Vu Quy' : 'Lễ Tân Hôn'))
</script>

<template>
  <section class="wedding-date section">
    <div class="container">
      <div
        ref="target"
        class="wedding-date__grid reveal reveal-fade-up"
        :class="{ 'is-visible': isVisible }"
      >
        <div class="wedding-date__block">
          <p class="day">{{ receptionDate.getDate() }}</p>
          <p class="month">{{ getMonthNameEn(receptionDate) }}</p>
          <p class="year">{{ receptionDate.getFullYear() }}</p>
        </div>

        <div class="wedding-date__info">
          <div class="wedding-date__item">
            <p class="eyebrow">{{ ceremonyLabel }}</p>
            <p class="heading-lg">{{ weddingData.ceremony.weddingCeremonyTime }}</p>
            <p class="wedding-date__sub">{{ ceremonyWeekday }} · {{ weddingData.ceremony.weddingCeremonyDate }}</p>
          </div>

          <div class="wedding-date__item">
            <p class="eyebrow">Thư mời tiệc cưới</p>
            <p class="heading-lg">{{ reception.time }}</p>
            <p class="wedding-date__sub">{{ receptionWeekday }} · {{ reception.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.wedding-date {
  &__grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    text-align: center;

    @include respond-to(desktop) {
      flex-direction: row;
      justify-content: center;
      gap: 5rem;
      text-align: left;
    }
  }

  &__block {
    .day {
      font-family: var(--font-serif);
      font-size: clamp(4rem, 12vw, 7rem);
      line-height: 0.9;
      margin: 0;
      color: var(--color-accent);
    }

    .month {
      letter-spacing: 0.4em;
      text-transform: uppercase;
      font-size: 0.85rem;
      margin: 1.8rem 0 0;
    }

    .year {
      font-family: var(--font-serif);
      font-size: 1.25rem;
      margin: 0;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include respond-to(tablet) {
      flex-direction: row;
      gap: 4rem;
    }
  }

  &__sub {
    color: var(--color-muted);
    margin: 0.25rem 0 0;
  }
}
</style>
