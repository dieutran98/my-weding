<script setup lang="ts">
import { computed } from 'vue';
import { weddingData } from '../../data/wedding'
import { parseDMYDate } from '../../utils/date';
import { useInviteSide } from '../../composables/useInviteSide'

const { side } = useInviteSide()
const reception = computed(() => weddingData.ceremony.reception[side])
</script>

<template>
  <footer class="wedding-footer">
    <p class="heading-script">{{ weddingData.groom.firstName }} &amp; {{ weddingData.bride.firstName }}</p>
    <p class="wedding-footer__date">{{reception.date}}</p>
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
