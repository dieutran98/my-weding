import { onBeforeUnmount, onMounted, type Ref } from 'vue'

const HEARTS = ['❤️', '💕', '💗', '💖', '💓']
const SPAWN_INTERVAL_MS = 600

/** Spawns falling heart spans into `container` on an interval; cleans up on unmount. */
export function useHeartRain(container: Ref<HTMLElement | null>) {
  let timerId: ReturnType<typeof setInterval> | undefined

  const spawnHeart = () => {
    if (!container.value) return

    const el = document.createElement('span')
    el.className = 'heart-rain'
    el.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)]

    const size = 12 + Math.random() * 25
    const duration = 5 + Math.random() * 6

    el.style.left = `${Math.random() * 100}vw`
    el.style.fontSize = `${size}px`
    el.style.animationDuration = `${duration}s`

    container.value.appendChild(el)
    el.addEventListener('animationend', () => el.remove(), { once: true })
  }

  onMounted(() => {
    timerId = setInterval(spawnHeart, SPAWN_INTERVAL_MS)
  })

  onBeforeUnmount(() => {
    if (timerId) clearInterval(timerId)
    container.value?.replaceChildren()
  })
}
