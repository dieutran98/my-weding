import { onBeforeUnmount, onMounted, ref } from 'vue'

/** Manages a background <audio> element without autoplaying (browsers block it anyway). */
export function useWeddingMusic(src: string) {
  const isPlaying = ref(false)
  let audio: HTMLAudioElement | undefined

  onMounted(() => {
    audio = new Audio(src)
    audio.loop = true
    toggle()
  })

  const toggle = async () => {
    if (!audio) return

    if (isPlaying.value) {
      audio.pause()
      isPlaying.value = false
      return
    }

    try {
      await audio.play()
      isPlaying.value = true
    } catch {
      // Autoplay/interaction restrictions blocked playback; keep UI in paused state.
      isPlaying.value = false
    }
  }

  onBeforeUnmount(() => {
    audio?.pause()
    audio = undefined
  })

  return { isPlaying, toggle }
}
