import Station1 from '~/assets/image/stations/station-1.png';
import Station2 from '~/assets/image/stations/station-2.png';
import Station3 from '~/assets/image/stations/station-3.png';

// Спонсорские блоки для разных дней
const NEW_PRELAUNCH_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/promo.mp4',
  title: 'The Showcase Station',
  description:
  `Emirates Fashion Week will unveil its Showcase Station at the pre-launch press conferences.
  Here, 80 beauty companies will present their latest services before and after the runway shows, as well as during the entire Beauty Showroom Day—an exclusive third-day event catering to an affluent audience passionate about fashion and beauty.`,
  buttonText: 'Learn More >',
  buttonLink: '/offer'
};

const NEW_FASHION_SHOW_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/fd.mp4',
  title: 'The Dedicated designer popup corner',
  description: `Secure your Designer's Popup to showcase your collection in an exclusive, premium environment—connecting directly with buyers, media, and trendsetters. Meanwhile, discover the excitement of the Catwalk Show, where live runway presentations unveil new collections and styles. Whether you're presenting or exploring, our event offers a unique platform for visibility, collaboration, and inspiration.`,
  buttonText: 'Reserve Station >',
  buttonLink: '/offer'
};

const NEW_BEAUTY_EXPO_SPONSOR = {
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
    mobileDate: '4 Nov',
    events: [
      {
        type: 'event',
        time: '4 November',
        place: 'Belcanto Dubai Opera',
        description: 'Pre-Launch',
        details: 'TUESDAY TONIGHT | EXCLUSIVE PRE-LAUNCH & PORTFOLIO EVENT — a special presentation introducing participating designers and brands.<br><strong>By Invitation Only</strong>',
        buttonText: ' REQUEST INVITE >',
        buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf9UiUI9FshAS-G9Ikkdj5Pq9DV3zkwtqdNdoNXeLxe2LQeEQ/viewform'
       },
    ],
  },
  { 
    title: 'Casting Summit', 
    date: '5-6 November 2025',
    mobileDate: '5-6 Nov',
    events: [
      {
        type: 'event',
        time: '5-6 November',
        place: 'Disclosed to Attendees',
        description: `Casting Summit`,
        details: `WEDNESDAY & THURSDAY | INTERNATIONAL MODEL CONFERENCE & CASTING EVENT — organized by MAG, bringing together aspiring models and leading global agencies for contract signings, development opportunities, and worldwide placements.
        <br><br>
        <strong>ModelAgentGroup</strong>
        <br>
        <strong>MAG – Model Agent Group</strong>
        <br>
        Worldwide Model Agency
        <br>
        Scouting / Development / Placement
        <br>
        Based in Austria
        <br>
        <strong>Registered Models Only</strong>
        `
      },
    ] 
  },
  { 
    title: `Fashion Shows 1<sup>st</sup> & 2<sup>nd</sup> Days`, 
    date: '8-9 November 2025',
    mobileDate: '8 Nov',
    events: [
      {
        type: 'event',
        time: '8 November',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `SATURDAY |  PRÊT-À-PORTER WOMEN'S & MEN'S COLLECTIONS SS 26`,
        details: `<strong>By Invitation Only</strong>
          <ul class="space-y-2 text-black">
            <li>• Noura Couture - UAE</li>
            <li>• Annet - Russia</li>
            <li>• Lesnikova dresses - Russia</li>
            <li>• Solana Couture - USA</li>
            <li>• Lora Couture - Azerbaijan</li>
            <li>• Etno Fresh - Russia</li>
            <li>• Belize - Germany</li>
            <li>• MoonSoul - Kirghizian</li>
            <li>• Olecia Arkhipova - Russia</li>
            <li>• Marianne Moore</li>
            <li>• Igarnitur - Poland</li>
            <li>• Herbelin - Poland</li>
            <li>• Devu - Poland</li>
            <li>• K*********d /Germany/</li>
            <li>• O******a /Saudi Arabia/</li>
            <li>• D******a /Belarus/</li>
            <li>• N****n /UAE/</li>
            <li>• A***a /Azerbaijan/</li>
            <li>• T**s /Romania/</li>
          </ul>
          <em class="text-gray-500">*Pending Mutual Approval</em>
        `,
        buttonText: 'REQUEST INVITE >',
        buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf9UiUI9FshAS-G9Ikkdj5Pq9DV3zkwtqdNdoNXeLxe2LQeEQ/viewform'
      },
      NEW_FASHION_SHOW_SPONSOR,
       {
         type: 'event',
         time: '9 November',
         place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
         description: `SUNDAY |  PRÊT-À-PORTER WOMEN'S & MEN'S COLLECTIONS SS 26`,
         details: `<strong>By Invitation Only</strong>
           <ul class="space-y-2 text-black">
             <li>• Alexandra AMA cabinet - Russia</li>
             <li>• Arni Fashion - USA/Indian</li>
             <li>• Rubashka - Russia</li>
             <li>• Snim - Kazakhstan</li>
             <li>• Kibovskaya - Russia</li>
             <li>• Fyor - UAE</li>
             <li>• Polina Tropillo - Russia</li>
             <li>• Olga Bogdanova - Russia</li>
             <li>• Elena Romanova - Russia</li>
             <li>• B********a /Azerbaijan/ </li>
             <li>• Z**n /Iraq/ </li>
             <li>• S****s /Oman/ </li>
             <li>• I****e /Armenia/ </li>
             <li>• G'******h /Philippines/ </li>
             <li>• M********m /Uzbekistan/ </li>
             <li>• Z*****o /Romania/ </li>
             <li>• T***o /Saudi Arabia/</em></li>
           </ul>
           <em class="text-gray-500">*Pending Mutual Approval</em>
         `,
         buttonText: 'REQUEST INVITE >',
         buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf9UiUI9FshAS-G9Ikkdj5Pq9DV3zkwtqdNdoNXeLxe2LQeEQ/viewform'
       },
    ] 
  },
    { 
    title: `Pop-Up Market 3<sup>rd</sup> & 4<sup>th</sup> Days`, 
    date: '10-11 November',
    mobileDate: '10-11 Nov',
    events: [
      {
        type: 'event',
        time: '10 November',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `MONDAY | BEAUTY DAY`,
         details: `
           <ul class="space-y-2">
             <li>• Beauty & cosmetics brands</li>
             <li>• MUAs, nails, brows/lashes</li>
             <li>• Salons, spas, bridal beauty</li>
             <li>• Makeup & cosmetology schools / courses</li>
           </ul>
           <br>
           <strong>Free Entry | 10:00–18:00</strong>
           <br>
           <div class="flex flex-col gap-3 mt-4">
             <a href="/offer" class="inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors bg-black text-white hover:bg-black/90 w-fit">
               <span>BOOK A SPOT AS A COMPANY</span>
             </a>
              <div class="flex flex-col">
              <a href="/offer?tr" style="background-color: #ff0000;" class=" inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors text-white w-fit">
                <span>2h Free Trial Spot</span>
                <span id="trial-waitlist-count" style="background-color: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 12px; font-weight: bold;">0</span>
              </a>
            </div>
         `,
      },
      {
        type: 'event',
        time: '11 November',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `TUESDAY | WELLNESS DAY`,
         details: `
           <ul class="space-y-2">
             <li>• Medical & aesthetic clinics</li>
             <li>• Health & wellness tourism, nutrition</li>
             <li>• Spas, massage, barbers</li>
             <li>• Gyms & wellness studios</li>
             <li>• Beauty tech (CRM, booking, payments)</li>
             <li>• Salon & clinic equipment suppliers</li>
           </ul>
           <br>
           <strong>Free Entry | 10:00–18:00</strong>
           <br>
           <div class="flex flex-col gap-3 mt-4">
             <a href="/offer" class="inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors bg-black text-white hover:bg-black/90 w-fit">
               <span>BOOK A SPOT AS A COMPANY</span>
             </a>
              <div class="flex flex-col">
               <a href="/offer?tr&waitlist" style="background-color: #ff0000;" class=" inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors text-white w-fit">
                <span>2h Free Trial Spot</span>
                <span id="trial-waitlist-count" style="background-color: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 12px; font-weight: bold;">0</span>
              </a>
              <i class="text-gray-500 text-sm">try your brand at EFW</i>
            </div>
            <strong>TRY YOUR BRAND AT EFW</strong>
            <strong>2h Showcase Spot — Free via Waitlist</strong>
            <ul>
              <li>– 20 lead chats with real visitors</li>
              <li>– Limited 10–20 showcase spots, up to 80 SMEs selected</li>
              <li>– Subsidized by Dubai Culture & Emirates Fashion Week to support beauty & design businesses</li>
            </ul
           </div>
         `,
      },
    ] 
  },
  { 
    title: 'Beauty Awards', 
    date: '10 November 2025',
    mobileDate: '10 Nov',
    events: [
      {
        type: 'event',
        time: '10 November',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `MONDAY TONIGHT | The award ceremony, Gala Dinner, and IntroduceMe Talk Show for VIP Buyers, Designers, Exhibitors, Influencers & Authorities`,
        details: `
          <strong>By Invitation Only</strong>
        `,
      },
    ] 
  },
  {
    title: 'VIP Brand Presentation',
    date: '11 November 2025',
    mobileDate: '11 Nov',
    events: [
      {
        type: 'event',
        time: '11 November',
        place: `Belcanto Dubai Opera`,
        description: `TUESDAY TONIGHT | VIP Brand Presentation at Dubai Opera — exclusive showcase for a distinguished audience`,
        details: `
          <strong>By Invitation Only</strong>
        `,
      },
    ] 
  },
]; 