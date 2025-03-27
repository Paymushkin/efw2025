import Station1 from '~/assets/image/stations/station-1.png';
import Station2 from '~/assets/image/stations/station-2.png';
import Station3 from '~/assets/image/stations/station-3.png';

// Спонсорские блоки для разных дней
const PRELAUNCH_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/promo.mp4',
  title: 'The Showcase Station',
  description:
  `Emirates Fashion Week will unveil its Showcase Station at the pre-launch press conferences.
  Here, 80 beauty companies will present their latest services before and after the runway shows, as well as during the entire Beauty Showroom Day—an exclusive third-day event catering to an affluent audience passionate about fashion and beauty.`,
  buttonText: 'Learn More >',
  buttonLink: '/station'
};

const FASHION_SHOW_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/fd.mp4',
  title: 'The Dedicated designer popup corner',
  description: `Secure your Designer’s Popup to showcase your collection in an exclusive, premium environment—connecting directly with buyers, media, and trendsetters. Meanwhile, discover the excitement of the Catwalk Show, where live runway presentations unveil new collections and styles. Whether you’re presenting or exploring, our event offers a unique platform for visibility, collaboration, and inspiration.`,
  buttonText: 'Reserve Station >',
  buttonLink: '/station'
};

const BEAUTY_EXPO_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/bd.mp4',
  title: 'Explore 80 Stations with Beauty Service Providers',
  description: `Showcase your offerings, connect with potential clients, and discover new collaboration opportunities in a dynamic expo setting featuring 80 dedicated stations. Present your services, meet key representatives, and grow your business through impactful networking and real-time engagement.`,
  buttonText: 'Reserve Station >',
  buttonLink: '/station'
};

export const EVENT_TYPES = {
  sponsorStation: {
    type: 'sponsorStation',
    videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/promo.mp4',
    title: 'Stations for sponsors',
    description: 'AI-powered business stations designed for seamless networking, lead generation, and interactive presentations. Engage with prospects through dynamic screens and real-time media integration, ensuring impactful connections at every moment.',
    buttonText: 'More information >',
    buttonLink: '/station'
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
    date: '4 April & 11 April 2025',
    events: [
      {
        type: 'event',
        time: '4 April',
        description: 'Press Conference “Introduction of EFW”',
        details: 'Evening Pre-Launch Press Conference Event with The IntroduceMe Talk Show for Media and Influencers',
      },
      PRELAUNCH_SPONSOR,
      {
        type: 'event',
        time: '11 April',
        description: 'Portfolio Party (Porto-party) as an “IntroduceMe EFW” talk show',
        details: 'A portfolio party will be held as an “IntroduceMe talk, EFW” talk show, where each guest is introduced live on stage by the host using a large screen. Designers, stylists, models, and other creatives present their work, connect via a matchmaking service, and get real-time exposure. With music, drinks, and media, it’s a vibrant networking space to showcase portfolios, gain feedback, and spark collaborations during fashion week.',
      },
    ],
  },
  // { title: 'KidsDay', date: '13/04/2025', events: [
  //   {
  //     type: 'event',
  //     time: '17:00',
  //     description: 'Marsi 2021 - Russia',
  //   //   details: 'Kids Day',
  //   },
  //   {
  //     type: 'event',
  //     time: '18:00',
  //     description: 'Beth & Mishka 2023 Russia'
  //   },
  //   {
  //     type: 'event',
  //     time: '19:30',
  //     description: 'Beyader 2019 UAE',
  //   },
  //   { ...EVENT_TYPES.sponsorStation },
  //   {
  //     type: 'event',
  //     time: '20:00',
  //     description: 'Danatella Belarus 2024',
  //   },
  //   {
  //     type: 'event',
  //     time: '20:30',
  //     description: 'DL-Dress 2019',
  //   },
  //   {
  //     type: 'event',
  //     time: '21:00',
  //     description: 'JAP Poland 2021',
  //   },
  //   {
  //     type: 'event',
  //     time: '21:30',
  //     description: 'Carbonado Collection 2020 Uzbekistan',
  //   },
  // ] },
  { title: 'Fashion Show', date: '13 & 14 April 2025', events: [
    {
      type: 'event',
      time: '13-14 April',
      description: 'Top Tato /Saudi Arabia/',
    },
    {
      type: 'event',
      time: '13-14 April',
      description: 'G’Nfaythi /Philippines/',
    },
    {
      type: 'event',
      time: '13-14 April',
      description: 'Alisia Fiori /Russia/',
    },
    {
      type: 'event',
      time: '13-14 April',
      description: 'Said Omari /Paris – UAE/',
    },
    FASHION_SHOW_SPONSOR,
    {
      type: 'event',
      time: '13-14 April',
      description: 'Sundus Collection /Oman/',
    },
    {
      type: 'event',
      time: '13-14 April',
      description: 'Alexandra Fashion House /Russia/',
    },
    {
      type: 'event',
      time: '13-14 April',
      description: 'Icona Stile /Armenia/',
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Ludmila Kannunik /Russia/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Orchidea Nera by Lamoo /Saudi Arabia/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Lilia /Algeria/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Kibovskaya /Russia/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Zain /Iraq/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Marina Vilisova /Russia/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Marina Undrits /Russia/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "By Osmanova /Azerbaijan/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Etho Fresh /Russia/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Zaggaro /Germany/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Sylweriusz Stanislawski",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Malikabegim /Uzbekistan/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Femini /Russia/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Chinara /Kazakhstan/",
    },
    {
      type: 'event',
      time: '13-14 April',
      description: "Boulas /Russia/",
    },
    
  ] },
  { title: 'Beauty Expo', date: '15 April 2025', events: [
    {
      type: 'event',
      time: '10:00 – 20:00',
      description: 'Beauty Expo Day',
    },
    BEAUTY_EXPO_SPONSOR,
  ] },
  { title: 'Beauty Awards', date: '15 April 2025 Night Gala', events: [
    {
      type: 'event',
      time: '15 April 18:00',
      description: 'Beauty Awards',
      details: `
        • International Deluxe Beauty Awards (IDBA) - competition where beauty service providers 
          will compete against each other in 30 categories.<br>
        • On the day of the gala dinner, a large exhibition for service providers 
          in the beauty industry will take place.<br>
        • Only the best of the best will be invited to the award ceremony to receive 
          their prizes from influential figures in show business and the beauty industry.<br>
        • The event is held in partnership with Emirates Fashion Week.<br><br>

        The award ceremony will take place at the luxurious and fashionable venue of Dubai on 15.04.2025.
      `,
      buttonText: 'Presentation >',
      buttonLink: 'https://deluxebeauty.world/'
    },
    {
      type: 'event',
      time: '15 April 21:00',
      description: 'After party. Portfolio party as an IntroduceMe EFW talk show',
      details: `
        The portfolio party at EFW will take the form of an IntroduceMe Talk Show, 
        where each guest is spotlighted live on stage by the host with the support of a large screen. 
        Designers, stylists, models, and other fashion creatives will present their portfolios, 
        connect through a dedicated matchmaking service, and gain instant visibility. 
        It’s a dynamic space to exchange ideas, receive feedback, and ignite new collaborations
      `,
    },
    // { ...EVENT_TYPES.bigSponsorStation },
  ] },
  { title: 'B2B only day', date: '16 April 2025', events: [
        {
      type: 'event',
      time: "Program for Fashion Brands' Entry into the UAE Market",
      description: 'Key stages of the program:',
      details: `
        1. Direct sales via marketplaces:<br>
          • listing products on leading uae marketplaces<br>
          • setting up logistics and promotional strategies<br>
          • optimizing sales and inventory management<br><br>

        2. Placement in multibrand stores:<br>
          • selecting suitable multibrand platforms to showcase collections<br>
          • negotiating agreements with retail networks<br>
          • organizing presentations of brand collections<br><br>

        3. Opening flagship stores:<br>
          • market analysis and selection of ideal store locations<br>
          • assistance witii store concept and design development<br>
          • support in legal and administrative matters<br><br>

        4. Connecting with fabric suppliers:<br>
          • establishing relationships with local and international fabric suppliers<br>
          • negotiating favorable terms for collaboration<br><br>

        5. Visiting clothing manufacturing facilities:<br>
          • organizing visits to local factories and production sites<br>
          • introducing brands to manufacturing processes and order placement opportunities<br><br>

        6. Establishing companies and opening bank accounts:<br>
          • comprehensive support for registering a company in the uae<br>
          • assistance with opening business bank accounts<br>
          • consultation on tax and legal compliance<br><br>

        7. Obtaining residency visas:<br>
          • guidance on obtaining residency visas for business owners and their teams<br>
          • advising on the most suitable residency options<br><br>

          Program benefits:<br>
            Unique opportunities to enter one of the world's most dynamic markets. <br>
            Full support at every stage, from planning to execution<br>
            Building valuable business connections and sharing experiences with key industry players<br><br>

            We offer a personalized approach tailored to each brand's specific needs, ensuring maximum efficiency and success in leveraging the uae's market potential for growth and expansion
      `,
    },
  ] },
] as const; 