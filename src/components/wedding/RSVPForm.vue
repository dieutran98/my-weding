<script setup lang="ts">
import { reactive } from 'vue'
import { useRSVPSubmit } from '../../composables/useRSVPSubmit'
import type { AttendanceAnswer, GuestSide } from '../../types/rsvp'

const form = reactive({
  name: '',
  attendance: '' as AttendanceAnswer | '',
  guestCount: '' as number | '',
  side: '' as GuestSide | '',
})

const { status, errorMessage, submitRSVP } = useRSVPSubmit()

const handleSubmit = async () => {
  await submitRSVP({
    name: form.name,
    attendance: form.attendance as AttendanceAnswer,
    guestCount: Number(form.guestCount),
    side: form.side as GuestSide,
  })
}
</script>

<template>
  <section id="rsvp" class="rsvp section">
    <div class="container">
      <h2 class="text-center heading-lg">Xác nhận tham dự</h2>

      <div v-if="status === 'success'" class="rsvp__success" role="status">
        <p class="heading-script">Cảm ơn bạn!</p>
        <p>Chúng mình đã nhận được xác nhận của bạn.</p>
      </div>

      <form v-else class="rsvp__form" novalidate @submit.prevent="handleSubmit">
        <label class="rsvp__field">
          <span>Họ và tên</span>
          <input v-model="form.name" type="text" name="name" autocomplete="name" required />
        </label>

        <fieldset class="rsvp__field">
          <legend>Bạn có tham dự không?</legend>
          <label class="rsvp__radio">
            <input v-model="form.attendance" type="radio" name="attendance" value="attending" required />
            <span>Có, tôi sẽ tham dự</span>
          </label>
          <label class="rsvp__radio">
            <input v-model="form.attendance" type="radio" name="attendance" value="declined" />
            <span>Tôi bận, rất tiếc không thể tham dự</span>
          </label>
        </fieldset>

        <label class="rsvp__field">
          <span>Số lượng người tham dự</span>
          <select v-model="form.guestCount" name="guestCount" required>
            <option value="" disabled>Chọn số lượng</option>
            <option v-for="n in [1, 2, 3, 4]" :key="n" :value="n">{{ n }}</option>
          </select>
        </label>

        <fieldset class="rsvp__field">
          <legend>Bạn là khách của ai?</legend>
          <label class="rsvp__radio">
            <input v-model="form.side" type="radio" name="side" value="groom" required />
            <span>Nhà trai</span>
          </label>
          <label class="rsvp__radio">
            <input v-model="form.side" type="radio" name="side" value="bride" />
            <span>Nhà gái</span>
          </label>
        </fieldset>

        <p v-if="status === 'error'" class="rsvp__error" role="alert">{{ errorMessage }}</p>

        <button type="submit" class="rsvp__submit" :disabled="status === 'submitting'">
          {{ status === 'submitting' ? 'Đang gửi…' : 'Gửi xác nhận' }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.rsvp {
  &__form {
    max-width: 480px;
    margin: 2.5rem auto 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: none;
    padding: 0;
    margin: 0;

    span,
    legend {
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      color: var(--color-muted);
    }

    input[type='text'],
    select {
      padding: 0.75rem 1rem;
      border: 1px solid var(--color-border);
      background: #fff;
      font-family: var(--font-sans);
      font-size: 1rem;
    }
  }

  &__radio {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
  }

  &__error {
    color: #a4453a;
    font-size: 0.9rem;
    margin: 0;
  }

  &__submit {
    padding: 0.9rem 1.5rem;
    background-color: var(--color-accent);
    color: #fff;
    border: none;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 0.85rem;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  &__success {
    max-width: 480px;
    margin: 2.5rem auto 0;
    text-align: center;
  }
}
</style>
