import Station1 from '~/assets/image/stations/station-1.png';
import Station2 from '~/assets/image/stations/station-2.png';
import Station3 from '~/assets/image/stations/station-3.png';

// Спонсорские блоки для новой секции
const NEW_PRELAUNCH_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/promo.mp4',
  title: 'New Showcase Station',
  description:
  `Новая секция Emirates Fashion Week представит свою Showcase Station на пресс-конференциях перед запуском.
  Здесь 80 beauty компаний представят свои последние услуги до и после показов на подиуме, а также в течение всего Beauty Showroom Day — эксклюзивного мероприятия третьего дня для состоятельной аудитории, увлеченной модой и красотой.`,
  buttonText: 'Узнать больше >',
  buttonLink: '/offer'
};

const NEW_FASHION_SHOW_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/fd.mp4',
  title: 'Новый уголок дизайнера',
  description: `Забронируйте Popup дизайнера, чтобы представить свою коллекцию в эксклюзивной премиальной среде — напрямую связавшись с покупателями, СМИ и законодателями трендов. Тем временем откройте для себя волнение Catwalk Show, где живые презентации на подиуме раскрывают новые коллекции и стили.`,
  buttonText: 'Забронировать станцию >',
  buttonLink: '/offer'
};

const NEW_BEAUTY_EXPO_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/bd.mp4',
  title: 'Исследуйте 80 станций с Beauty Service Providers',
  description: `Покажите свои предложения, свяжитесь с потенциальными клиентами и откройте новые возможности для сотрудничества в динамичной обстановке экспо с 80 специальными станциями.`,
  buttonText: 'Забронировать станцию >',
  buttonLink: '/offer'
};

const NEW_BEAUTY_AWARDS_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/Professional_Mode_the_camera_dolly_zoom_out%20(online-video-cutter.com).mp4',
  title: `Новая церемония награждения состоится в роскошном<br> и модном месте Дубая 17.04.2025.`,
  description: ``,
  buttonText: '',
  buttonLink: ''
};

export const NEW_EVENT_TYPES = {
  bigSponsorStation: {
    type: 'bigSponsorStation',
    title: 'Новые станции для спонсоров',
    description: 'Станции на базе ИИ, разработанные для бесшовного нетворкинга, генерации лидов и интерактивных презентаций. Взаимодействуйте с потенциальными клиентами через динамические экраны и интеграцию медиа в реальном времени.',
    images: [
      { src: Station1, caption: 'Новая станция 1', subcaption: 'Новое описание и цена' },
      { src: Station2, caption: 'Новая станция 2', subcaption: 'Новое описание и цена' },
      { src: Station3, caption: 'Новая станция 3', subcaption: 'Новое описание и цена' }
    ],
    buttonText: 'Больше информации >'
  }
} as const;

export const NEW_PROGRAM_TABS = [
  // {
  //   title: 'Magazine pre-Launch',
  //   date: '4 August 2025',
  //   events: [
  //     {
  //       type: 'event',
  //       time: '4 August',
  //       place: 'Dubai Mall',
  //      },
  //   ],
  // },
  {
    title: 'Pre-Launch',
    date: '4 November 2025',
    events: [
      {
        type: 'event',
        time: '4 November',
        place: 'Dubai Opera',
       },
    ],
  },
  { 
    title: 'Pop - Up Market', 
    date: '7 November', 
    events: [
      {
        type: 'event',
        time: '7 November',
        description: `Pop-Up Market`,
        details: 'Market The POP-UP Market will showcase fashion, beauty, fragrance, and lifestyle brands, creating a vibrant space for style and creativity and sale',
      },
    ] 
  },
  { 
    title: 'Fashion Shows', 
    date: '8 November', 
    events: [
      {
        type: 'event',
        time: '7:00 PM',
        description: 'Ready-to-Wear collections сезон SS 26',
        details: 'Pop-Up Market. Fashion shows featuring renowned and emerging international designers from Middle East countries, Europe, America, Asia, and the CIS countries.',
      },
    ] 
  },
    { 
    title: ' Pop-up Market', 
    date: '9-10 November', 
    events: [
      {
        type: 'event',
        time: '9-10 November',
        // description: `Prêt-à-porter women's & men's collections  SS 26`,
        // details: 'Pop-Up Market ',
      },
    ] 
  },
  { 
    title: 'VIP Brand Presentation', 
    date: '11 November', 
    events: [
      {
        type: 'event',
        time: '11 November',
        place: 'Dubai Opera',
      },
    ] 
  },
]; 