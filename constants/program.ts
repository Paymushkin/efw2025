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
  buttonLink: '/offer'
};

const FASHION_SHOW_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/fd.mp4',
  title: 'The Dedicated designer popup corner',
  description: `Secure your Designer's Popup to showcase your collection in an exclusive, premium environment—connecting directly with buyers, media, and trendsetters. Meanwhile, discover the excitement of the Catwalk Show, where live runway presentations unveil new collections and styles. Whether you're presenting or exploring, our event offers a unique platform for visibility, collaboration, and inspiration.`,
  buttonText: 'Reserve Station >',
  buttonLink: '/offer'
};

const BEAUTY_EXPO_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/bd.mp4',
  title: 'Explore 80 Stations with Beauty Service Providers',
  description: `Showcase your offerings, connect with potential clients, and discover new collaboration opportunities in a dynamic expo setting featuring 80 dedicated stations. Present your services, meet key representatives, and grow your business through impactful networking and real-time engagement.`,
  buttonText: 'Reserve Station >',
  buttonLink: '/offer'
};

const BEAUTY_AWARDS_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/Professional_Mode_the_camera_dolly_zoom_out%20(online-video-cutter.com).mp4',
  title: `The award ceremony will take place at the luxurious<br> and fashionable venue of Dubai on 15.04.2025.`,
  description: ``,
  buttonText: '',
  buttonLink: ''
};

export const EVENT_TYPES = {

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
    date: '4, 8 April & 11 April 2025',
    mobileDate: '4 Apr',
    events: [
      {
        type: 'event',
        time: 'April 4, 8:00 PM',
        place: 'MOB Restaurant, Kempinski near Mall of the Emirates',
        description: 'Pre-Launch Event 1/3: “IntroduceMe Talk Show & Casting Kickoff”',
        details: `This talk show includes open auditions for EFW TV hosts. Additional calls for photographers, models, stylists, and volunteers, plus a preview of the Face of EFW campaign and Paparazzi instant-photo tech. First look at EFW’s upcoming features.
        <br><br>
        Open to on-camera talent, fashion professionals, and media interested in joining EFW’s teams.`,
      },
      {
        type: 'event',
        time: 'April 8, 6:00 PM',
        place: 'Belcanto at Dubai Opera',
        description: 'Pre-Launch Event 2/3: “Tech Tuesday VIP + EFW Collab. Business meets Beauty”',
        details: `In partnership with the Dubai Tech Tuesday VIP community, this IntroduceMe Talk Show highlights the new Beauty Showroom set for Day 3 of Fashion Week, with selected Faces of EFW interviewing VIPs and live coverage via Paparazzi instant photos and Realitime.Media screens.
        <br><br>
        Perfect for designers, media, beauty service providers & tech CEOs and influencers eager to discover EFW innovations, network with top-tier industry peers, and preview the upcoming Beauty Showroom.`,
        buttonText: 'Dubai Tech Tuesday >',
        buttonLink: 'https://lu.ma/DubaiTechTues40'
      },

      PRELAUNCH_SPONSOR,
      {
        type: 'event',
        time: 'April 11, 8:00 PM',
        place: 'Suvorov Lounge',
        description: 'Pre-Launch Event 3/3: “Porto-Party & Portfolio Showcase”',
        details: `A gathering for stylists, designers, and fashion professionals to share portfolios, with interviews by EFW’s chosen hosts and coverage through Paparazzi instant photos and <a class="programm-link" href="https://realitime.media/" target="_blank">Realitime.Media</a>.
        <br><br>
        Recommended for industry insiders, media, designers, buyers and influencers looking to present work and connect before Fashion Week.`,
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
  { title: 'Fashion Show', date: '13 & 14 April 2025', mobileDate: '13 Apr', events: [
    {
      type: 'event',
      time: '13 April | 6 PM',
      description: 'Fashion Show',
      details: `
        <details class="mt-2">
          <summary class="cursor-pointer font-semibold mb-2">Designers List</summary>
          <ul class="space-y-2 text-black mt-2">
            <li>Anastasiya Boyarskaya /Russia/</li>
            <li>Osmosiss /Italy/</li>
            <li>Katharina Arnold /Germany/</li>
            <li>SNIM /Russia/</li>
            <li>Tanya Tuzova /Russia/</li>
            <li>Danatalla /Belarus/</li>
            <li>Kibovskaya /Russia/</li>
            <li>Nermin /UAE/</li>
            <li>Aisha /Azerbaijan/</li>
            <li>Borovik /Russia/</li>
            <li>By Osmanova /Azerbaijan/</li>
            <li>Sylweriusz Stanislawski</li>
            <li>Alessandro Borreli /Russia/</li>
            <li>Marina Mirova /Russia/</li>
            <li>Alla Couture /Russia/</li>
            <li>Bolero /Russia/</li>
            <li>Raisa Miroshnichenko /Russia/</li>
            <li>Zain /Iraq/</li>
            <li>Show Stylists</li>
            <li>Alisia Fiori /Russia/</li>
            <li>Etno Fresh /Russia/</li>
            <li>Sundus /Oman/</li>
            <li>Top Tato /Saudi Arabia/</li>
            <li>Icona Style /Armenia/</li>
            <li>Boulas /Russia/</li>
            <li>G'nFayth /Philippines/</li>
            <li>Marina Undrits /Russia/</li>
            <li>Triskelon /Russia/</li>
            <li>Nadia</li>
            <li>Feminelli /Russia/</li>
            <li>Addicted /Russia/</li>
            <li>Alexandra Fashion House</li>
            <li>Orchidea Nera by Lamoo /Saudi Arabia/</li>
            <li>Luna Collection /Russia/</li>
            <li>Malikabegim /Uzbekistan/</li>
            <li>Zaggaro /Romania/</li>
            <li>Irmi /Russia/</li>
            <li>Two Kids /Romania/</li>
            <li>Elena Romanova /Russia/</li>
          </ul>
        </details>
        `,
    },
    // {
    //   type: 'event',
    //   time: '13 April | 6 PM',
    //   description: 'Anastasiya Boyarskaya /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 6 PM',
    //   description: "Osmosiss /Italy/",
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 6 PM',
    //   description: 'Katharina Arnold /Germany/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 6 PM',
    //   description: 'SNIM /Russia/',
    // },
    // FASHION_SHOW_SPONSOR,
    // {
    //   type: 'event',
    //   time: '13 April | 6 PM',
    //   description: 'Tanya Tuzova /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 6 PM',
    //   description: 'Danatalla /Belarus/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 6 PM',
    //   description: 'Kibovskaya /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 6 PM',
    //   description: 'Nermin /UAE/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 6 PM',
    //   description: 'Aisha /Azerbaijan/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 6 PM',
    //   description: 'Borovik /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 8 PM',
    //   description: 'By Osmanova /Azerbaijan/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 8 PM',
    //   description: 'Sylweriusz Stanislawski',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 8 PM',
    //   description: 'Alessandro Borreli /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 8 PM',
    //   description: ' Marina Mirova /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 8 PM',
    //   description: 'Alla Couture /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 8 PM',
    //   description: 'Bolero /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 8 PM',
    //   description: 'Raisa Miroshnichenko /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 8 PM',  
    //   description: 'Zain /Iraq/',
    // },
    // {
    //   type: 'event',
    //   time: '13 April | 8 PM',
    //   description: 'Show Stylists',
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 6 PM',
    //   description: 'Alisia Fiori /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 6 PM',
    //   description: 'Etno Fresh /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 6 PM',
    //   description: 'Sundus /Oman/',
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 6 PM',
    //   description: 'Top Tato /Saudi Arabia/',
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 6 PM',
    //   description: 'Icona Style /Armenia/',
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 6 PM',
    //   description: 'Boulas /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 6 PM',
    //   description: 'G’nFayth /Philippines/',
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 6 PM',
    //   description: 'Marina Undrits /Russia/',
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 6 PM',
    //   description: 'Triskelon /Russia/',
    // },
    // {
    //   type: 'event',  
    //   time: '14 April | 6 PM',
    //   description: 'Nadia',
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 8 PM',
    //   description: 'Feminelli /Russia/', 
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 8 PM',
    //   description: 'Addicted /Russia/', 
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 8 PM',
    //   description: 'Alexandra Fashion House', 
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 8 PM',
    //   description: 'Orchidea Nera by Lamoo /Saudi Arabia/', 
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 8 PM',
    //   description: 'Luna Collection /Russia/', 
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 8 PM',
    //   description: 'Malikabegim /Uzbekistan/', 
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 8 PM',
    //   description: 'Zaggaro /Romania/', 
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 8 PM',
    //   description: 'Irmi /Russia/', 
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 8 PM',
    //   description: 'Two Kids /Romania/', 
    // },
    // {
    //   type: 'event',
    //   time: '14 April | 8 PM',  
    //   description: 'Elena Romanova /Russia/',
    // },
    
  ] },
  { title: 'Beauty Expo', date: '15 April 2025', mobileDate: '15 Apr', events: [
    {
      type: 'event',
      time: '10:00 – 20:00',
      description: 'Beauty Expo Day',
    },
    BEAUTY_EXPO_SPONSOR,
  ] },
  { title: 'Beauty Awards', date: '15 April 2025 Night Gala', mobileDate: '15 Apr', events: [
    BEAUTY_AWARDS_SPONSOR,
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
        It's a dynamic space to exchange ideas, receive feedback, and ignite new collaborations.
      `,
    },
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
            Unique opportunities to enter one of the world's most dynamic markets.<br>
            Full support at every stage, from planning to execution<br>
            Building valuable business connections and sharing experiences with key industry players<br><br>

            We offer a personalized approach tailored to each brand's specific needs, ensuring maximum efficiency and success in leveraging the uae's market potential for growth and expansion.
      `,
    },
  ] },
] as const; 