export interface WeddingPerson {
  firstName: string
  fullName: string
  /** Catholic baptismal/saint name, shown as a prefix before the full name when present */
  saintName?: string
}

export interface WeddingFamily {
  father: string
  mother: string
  address: string
  fatherSaintName?: string
  motherSaintName?: string
}

export type InviteSide = 'groom' | 'bride'

export interface WeddingEvent {
  id: string
  title: string
  /** Short script/italic label shown under the title, e.g. "Reception" */
  subtitle?: string
  /** Line-art icon shown next to the event; defaults to 'glasses' */
  icon?: 'rings' | 'glasses' | 'cake'
  dayLabel: string
  time: string
  date: string
  lunarDate?: string
  venueName: string
  address: string
  mapUrl: string
  ctaLabel?: string
  /** Which side of the family this event belongs to; 'both' shows regardless of invite side */
  audience: InviteSide | 'both'
}

export interface NavItem {
  id: string
  label: string
}

export interface WeddingData {
  groom: WeddingPerson
  bride: WeddingPerson
  weddingDate: string
  heroImage: string
  eventsImage: string
  musicSrc: string
  ceremony: {
    weddingCeremonyTime: string
    weddingCeremonyDate: string
    reception: Record<InviteSide, { time: string; date: string }>
  }
  groomFamily: WeddingFamily
  brideFamily: WeddingFamily
  events: WeddingEvent[]
  message: string[]
  loveQuote: string
  navItems: NavItem[]
}
