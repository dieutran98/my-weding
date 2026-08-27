import type { InviteSide } from '../types/wedding'

/** Resolves which family side the invite link is for via the `?from=groom|bride` query param, defaulting to 'groom'. */
export function useInviteSide(): { side: InviteSide } {
  const from = new URLSearchParams(window.location.search).get('from')
  const side: InviteSide = from === 'bride' ? 'bride' : 'groom'
  return { side }
}
