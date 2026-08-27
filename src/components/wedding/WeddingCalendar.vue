<script setup lang="ts">
import { computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useInviteSide } from '../../composables/useInviteSide'
import { weddingData } from '../../data/wedding'
import { parseDMYDate } from '../../utils/date'

const WEEKDAY_LABELS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

const { target, isVisible } = useScrollReveal()
const { side } = useInviteSide()

const ceremonyDate = computed(() => parseDMYDate(weddingData.ceremony.weddingCeremonyDate))
// Assumes ceremony and reception fall in the same month/year as the current data does.
const receptionDate = computed(() => parseDMYDate(weddingData.ceremony.reception[side].date))

const year = computed(() => ceremonyDate.value.getFullYear())
const month = computed(() => ceremonyDate.value.getMonth() + 1)
const ceremonyDay = computed(() => ceremonyDate.value.getDate())
const receptionDay = computed(() => receptionDate.value.getDate())

const weeks = computed(() => {
  const firstDay = new Date(year.value, month.value - 1, 1)
  const daysInMonth = new Date(year.value, month.value, 0).getDate()
  // JS getDay(): 0=Sun..6=Sat; convert to Monday-first index (0=Mon..6=Sun).
  const leadingBlanks = (firstDay.getDay() + 6) % 7

  const cells: (number | null)[] = [
    ...Array(leadingBlanks).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  const result: (number | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) {
    result.push(cells.slice(i, i + 7))
  }
  return result
})
</script>

<template>
  <section class="calendar section">
    <div class="container text-center">
      <p class="eyebrow">Tháng {{ month }}</p>

      <table
        ref="target"
        class="calendar__table reveal reveal-scale"
        :class="{ 'is-visible': isVisible }"
      >
        <thead>
          <tr>
            <th v-for="label in WEEKDAY_LABELS" :key="label">{{ label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, i) in weeks" :key="i">
            <td v-for="(day, j) in week" :key="j">
              <span
                v-if="day"
                class="calendar__day"
                :class="{ 'calendar__day--wedding': day === ceremonyDay || day === receptionDay }"
              >
                {{ day }}
                <span
                  v-if="day === ceremonyDay || day === receptionDay"
                  class="calendar__heart"
                  aria-hidden="true"
                  >♥</span
                >
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped lang="scss">
.calendar {
  &__table {
    margin: 2rem auto 0;
    border-collapse: collapse;
    width: 100%;
    max-width: 420px;

    th {
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      color: var(--color-muted);
      font-weight: 500;
      padding-bottom: 0.75rem;
    }

    td {
      padding: 0.4rem;
      text-align: center;
      font-family: var(--font-serif);
    }
  }

  &__day {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;

    &--wedding {
      color: #fff;
      background-color: var(--color-accent);
    }
  }

  &__heart {
    position: absolute;
    bottom: -0.85rem;
    font-size: 0.7rem;
    color: var(--color-accent);
  }
}
</style>
