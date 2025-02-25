import Station1 from '~/assets/image/stations/station-1.png';
import Station2 from '~/assets/image/stations/station-2.png';
import Station3 from '~/assets/image/stations/station-3.png';

export const EVENT_TYPES = {
  sponsorStation: {
    type: 'sponsorStation',
  },
  bigSponsorStation: {
    type: 'bigSponsorStation',
    title: 'Stations for sponsors',
    description: 'AI-powered business stations designed for seamless networking, lead generation, and interactive presentations. Engage with prospects through dynamic screens and real-time media integration, ensuring impactful connections at every moment.',
    images: [
      { src: Station1, caption: 'Station 1', subcaption: 'Описание и цена' },
      { src: Station2, caption: 'Station 1', subcaption: 'Описание и цена' },
      { src: Station3, caption: 'Station 1', subcaption: 'Описание и цена' }
    ],
    buttonText: 'More information >'
  }
} as const;

export const PROGRAM_TABS = [
  {
    title: 'Pre-Launch',
    date: 'Start of April',
    events: [
      {
        type: 'event',
        time: '1st Week of April',
        description: 'Press Conference',
        details: 'Evening Pre-Launch Press Conference Event with The IntroduceMe Talk Show for Media and Influencers',
      },
      { ...EVENT_TYPES.sponsorStation },
      {
        type: 'event',
        time: '2nd Week of April',
        description: 'Pre-Launch Event',
        details: 'Evening Pre-Launch event with The IntroduceMe Talk Show for Media, Influencers, Sponsors, Designers and Faces of EFW',
      },
    ],
  },
  { title: 'KidsDay', date: '13/04/2025', events: [
    {
      type: 'event',
      time: '17:00',
      description: 'Marsi 2021 - Russia',
    //   details: 'Kids Day',
    },
    {
      type: 'event',
      time: '18:00',
      description: 'Beth & Mishka 2023 Russia'
    },
    {
      type: 'event',
      time: '19:30',
      description: 'Beyader 2019 UAE',
    },
    { ...EVENT_TYPES.sponsorStation },
    {
      type: 'event',
      time: '20:00',
      description: 'Danatella Belarus 2024',
    },
    {
      type: 'event',
      time: '20:30',
      description: 'DL-Dress 2019',
    },
    {
      type: 'event',
      time: '21:00',
      description: 'JAP Poland 2021',
    },
    {
      type: 'event',
      time: '21:30',
      description: 'Carbonado Collection 2020 Uzbekistan',
    },
  ] },
  { title: 'WomenDay', date: '14/04/2025', events: [
    {
      type: 'event',
      time: '17:00',
      description: 'Dilrabo 2020 Uzbekistan',
    },
    {
      type: 'event',
      time: '17:30',
      description: 'Baravia Fashion UAE 2021',
    },
    {
      type: 'event',
      time: '18:00',
      description: 'Said Omari - Syria Paris 2020',
    },
    {
      type: 'event',
      time: '18:30',
      description: 'Michael Lombard 2019 USA',
    },
    { ...EVENT_TYPES.sponsorStation },
    {
      type: 'event',
      time: '19:00',
      description: 'Baravia 2020',
    },
    {
      type: 'event',
      time: '19:30',
      description: 'D-Design 2021 Morocco',
    },
    {
      type: 'event',
      time: '20:00',
      description: 'Aaronic Atelier 2022 UAE',
    },
    {
      type: 'event',
      time: '20:30',
      description: 'Savalme 2022 - Russia',
    },
    
  ] },
  { title: 'Beauty Expo', date: '15/04/2025', events: [
    {
      type: 'event',
      time: '10:00 – 20:00',
      description: 'Beauty Expo Day',
    },
    { ...EVENT_TYPES.bigSponsorStation },
  ] },
  { title: 'BeautyAwards', date: '15/04/2025', events: [
    {
      type: 'event',
      time: '10:00 – 20:00',
      description: 'BeautyAwards',
      details: `
        • International Deluxe Beauty Awards (IDBA) - competition where beauty service providers 
          will compete against each other in 30 categories.
        • On the day of the gala dinner, a large exhibition for service providers 
          in the beauty industry will take place.
        • Only the best of the best will be invited to the award ceremony to receive 
          their prizes from influential figures in show business and the beauty industry.
        • The event is held in partnership with Emirates Fashion Week.

        The award ceremony will take place at the luxurious and fashionable venue of Dubai on 15.04.2025.
      `,
      buttonText: 'Presentation >',
      buttonLink: 'https://storage.yandexcloud.net/videos-meyou/efw2025/Deluxe%20Beauty%20Awards%202025%20ENG.pdf'
    },
    { ...EVENT_TYPES.bigSponsorStation },
  ] },
  { title: 'AfterDay', date: 'April', events: [] },
] as const; 