import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export type RevealAnimation = 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right'

/**
 * Binds a template ref to an IntersectionObserver and reveals it once
 * it enters the viewport. Observer is disconnected after the first
 * trigger and on unmount to avoid leaks.
 */
export function useScrollReveal(options: { threshold?: number } = {}) {
  const target: Ref<HTMLElement | null> = ref(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold ?? 0.15 },
    )

    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { target, isVisible }
}
