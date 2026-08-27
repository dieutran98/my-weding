import { ref } from 'vue'
import type { RSVPPayload, RSVPStatus } from '../types/rsvp'

const SCRIPT_URL = import.meta.env.VITE_RSVP_SCRIPT_URL as string | undefined

export function useRSVPSubmit() {
  const status = ref<RSVPStatus>('idle')
  const errorMessage = ref('')

  const validate = (payload: RSVPPayload): string | null => {
    if (!payload.name.trim()) return 'Vui lòng nhập họ và tên.'
    if (!payload.attendance) return 'Vui lòng xác nhận tham dự.'
    if (!payload.guestCount) return 'Vui lòng chọn số lượng người tham dự.'
    if (!payload.side) return 'Vui lòng cho biết bạn là khách của nhà trai hay nhà gái.'
    return null
  }

  const submitRSVP = async (payload: RSVPPayload) => {
    const validationError = validate(payload)
    if (validationError) {
      status.value = 'error'
      errorMessage.value = validationError
      return
    }

    if (!SCRIPT_URL) {
      status.value = 'error'
      errorMessage.value = 'Chưa cấu hình VITE_RSVP_SCRIPT_URL.'
      return
    }

    status.value = 'submitting'
    errorMessage.value = ''

    try {
      // Apps Script Web Apps don't send CORS headers, so the response is opaque:
      // request with 'no-cors' and text/plain (avoids a CORS preflight) and treat
      // a non-throwing fetch as success (optimistic UI).
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
      status.value = 'success'
    } catch {
      status.value = 'error'
      errorMessage.value = 'Gửi xác nhận thất bại, vui lòng thử lại.'
    }
  }

  return { status, errorMessage, submitRSVP }
}
