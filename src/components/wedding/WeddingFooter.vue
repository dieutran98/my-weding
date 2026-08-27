<script setup lang="ts">
import { weddingData } from '../../data/wedding'
</script>

<template>
  <footer class="wedding-footer">
    <p class="heading-script">{{ weddingData.groom.firstName }} &amp; {{ weddingData.bride.firstName }}</p>
    <p class="wedding-footer__date">20.12.2026</p>
    <p class="wedding-footer__thanks">Cảm ơn bạn đã ghé thăm thiệp cưới của chúng mình.</p>
  </footer>
</template>

<style scoped lang="scss">
.wedding-footer {
  padding: 3rem 1.5rem 6rem;
  text-align: center;
  color: var(--color-muted);

  &__date {
    margin: 0.25rem 0;
    font-family: var(--font-serif);
  }

  &__thanks {
    font-size: 0.85rem;
  }
}
</style>
