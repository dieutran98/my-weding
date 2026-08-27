<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { weddingData } from '../../data/wedding'

const activeId = ref(weddingData.navItems[0]?.id ?? '')
let observer: IntersectionObserver | undefined

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const sections = weddingData.navItems
    .map((item) => document.getElementById(item.id))
    .filter((el): el is HTMLElement => Boolean(el))

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) activeId.value = visible.target.id
    },
    { threshold: 0.4 },
  )

  sections.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <nav class="floating-nav" aria-label="Điều hướng thiệp cưới">
    <ul>
      <li v-for="item in weddingData.navItems" :key="item.id">
        <button
          type="button"
          :class="{ 'is-active': activeId === item.id }"
          @click="scrollTo(item.id)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.floating-nav {
  position: fixed;
  z-index: 50;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(248, 245, 239, 0.92);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.4rem;
  backdrop-filter: blur(6px);

  @include respond-to(desktop) {
    bottom: auto;
    left: auto;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 0.25rem;
    margin: 0;
    padding: 0;

    @include respond-to(desktop) {
      flex-direction: column;
    }
  }

  button {
    border: none;
    background: transparent;
    padding: 0.5rem 0.9rem;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    color: var(--color-muted);
    border-radius: 999px;
    transition: background-color 0.2s ease, color 0.2s ease;

    &.is-active,
    &:hover {
      background-color: var(--color-accent);
      color: #fff;
    }
  }
}
</style>
