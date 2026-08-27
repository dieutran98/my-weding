import { onBeforeUnmount, onMounted, reactive } from 'vue'

export interface CountdownState {
  days: number
  hours: number
  minutes: number
  seconds: number
  isPast: boolean
}

const DAY_MS = 24 * 60 * 60 * 1000
const HOUR_MS = 60 * 60 * 1000
const MINUTE_MS = 60 * 1000

/** Reactive countdown to `targetDate`, ticking every second, cleaned up on unmount. */
export function useCountdown(targetDate: string) {
  const remaining = reactive<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  })

  let timerId: ReturnType<typeof setInterval> | undefined

  const tick = () => {
    const diff = new Date(targetDate).getTime() - Date.now()

    if (diff <= 0) {
      remaining.days = 0
      remaining.hours = 0
      remaining.minutes = 0
      remaining.seconds = 0
      remaining.isPast = true
      return
    }

    remaining.isPast = false
    remaining.days = Math.floor(diff / DAY_MS)
    remaining.hours = Math.floor((diff % DAY_MS) / HOUR_MS)
    remaining.minutes = Math.floor((diff % HOUR_MS) / MINUTE_MS)
    remaining.seconds = Math.floor((diff % MINUTE_MS) / 1000)
  }

  onMounted(() => {
    tick()
    timerId = setInterval(tick, 1000)
  })

  onBeforeUnmount(() => {
    if (timerId) clearInterval(timerId)
  })

  return { remaining }
}
