export type GuestSide = 'groom' | 'bride'
export type AttendanceAnswer = 'attending' | 'declined'

export interface RSVPPayload {
  name: string
  attendance: AttendanceAnswer
  guestCount: number
  side: GuestSide
}

export type RSVPStatus = 'idle' | 'submitting' | 'success' | 'error'
