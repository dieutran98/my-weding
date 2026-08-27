import type { WeddingData } from '../types/wedding'

// All wedding content lives here so components stay presentation-only.
// Swap image/audio paths under /public and edit the fields below to re-skin the invitation.
export const weddingData: WeddingData = {
  groom: {
    firstName: 'Quang Diệu',
    fullName: 'Trần Quang Diệu',
    saintName: 'Đaminh', // TODO: fill in tên thánh
  },
  bride: {
    firstName: 'Bích Hợp',
    fullName: 'Phạm Thị Bích Hợp',
    saintName: 'Maria', // TODO: fill in tên thánh
  },
  weddingDate: '2026-09-12T16:00:00',
  heroImage: `${import.meta.env.BASE_URL}images/wedding/wedding.JPG`,
  eventsImage: `${import.meta.env.BASE_URL}images/wedding/event.JPG`,
  // No real audio file provided yet; WeddingMusic component guards against missing/failed sources.
  musicSrc: `${import.meta.env.BASE_URL}audio/wedding-music.mp3`,

  ceremony: {
    weddingCeremonyTime: '16:00',
    weddingCeremonyDate: '12.09.2026',
    reception: {
      groom: { time: '11:00', date: '13.09.2026' },
      bride: { time: '17:30', date: '12.09.2026' },
    },
  },

  groomFamily: {
    father: 'Trần Quang Quyết',
    mother: 'Nguyễn Thị Đông',
    address: 'Tổ 10, Khu Phố 18, Phường Long Bình, TP.Đồng Nai',
    fatherSaintName: 'Đaminh', // TODO: fill in tên thánh
    motherSaintName: 'Maria', // TODO: fill in tên thánh
  },
  brideFamily: {
    father: 'Phạm Xuân Quý',
    mother: 'Nguyễn Thị Tuyết',
    address: 'Khu Phố 20, Phường Long Bình, TP.Đồng Nai',
    fatherSaintName: 'Phêrô', // TODO: fill in tên thánh
    motherSaintName: 'Maria', // TODO: fill in tên thánh
  },

  events: [
    {
      id: 'groom-reception',
      title: 'TIỆC CƯỚI NHÀ TRAI',
      subtitle: 'Reception',
      icon: 'glasses',
      dayLabel: 'Chủ nhật',
      time: '11:00',
      date: '13.09.2026',
      lunarDate: 'Tức ngày 03 tháng 08 năm Bính Ngọ',
      venueName: 'Trâm Anh Garden',
      address: '11A/40 Nguyễn Ái Quốc, Khu Phố 9, P.Long Bình, TP.Đồng Nai',
      mapUrl: 'https://maps.app.goo.gl/gkWXmoVjC6Dino6u5',
      ctaLabel: 'Xem chỉ đường',
      audience: 'groom',
    },
    {
      id: 'bride-reception',
      title: 'TIỆC CƯỚI NHÀ GÁI',
      subtitle: 'Reception',
      icon: 'glasses',
      dayLabel: 'Thứ bảy',
      time: '17:30',
      date: '12.9.2026',
      lunarDate: 'Tức ngày 02 tháng 08 năm Bính Ngọ',
      venueName: 'Đền Thánh Martino (Bên cạnh khán đài B - Cổng số 8)',
      address: '6 Nguyễn Trường Tộ, P.Long Bình, TP.Đồng Nai',
      mapUrl: 'https://maps.app.goo.gl/hmVnx5gf57AHLyh19',
      ctaLabel: 'Xem chỉ đường',
      audience: 'bride',
    },
  ],

  message: [
    'Chúng mình sắp bắt đầu một hành trình mới cùng nhau.',
    'Niềm vui này sẽ trọn vẹn hơn khi có bạn bên cạnh.',
    'Cuộc sống quý giá không chỉ ở đích đến, mà còn ở những khoảnh khắc chia sẻ cùng nhau.',
    'Vì vậy, chúng mình mong được bạn chung vui trong ngày hạnh phúc này.',
  ],

  loveQuote:
    'Loại bỏ tất cả những lời yêu thương hoa mỹ, có lẽ tình yêu thực sự là sự đồng hành lâu dài.',

  navItems: [
    { id: 'hero', label: 'Đầu Trang' },
    { id: 'couple', label: 'Cặp Đôi' },
    { id: 'events', label: 'Sự Kiện' },
    // { id: 'rsvp', label: 'Xác nhận' },
  ],
}
